import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b-pphqpeq {
  d: path("M3 8a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.ggq6l829n {
  d: path("M9.5 14.5h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n_u480shn {
  d: path("M9.5 11h8");
}

.sfnyx4wnk {
  d: path("M6 6v14");
}
</style><g class="hntgybcog"><path class="b-pphqpeq"/><path class="sfnyx4wnk"/><path class="n_u480shn"/><path class="ggq6l829n"/></g>`,
		"fallback": "iconmind:cache-mount-outline-thin",
	});
}

export default Component;

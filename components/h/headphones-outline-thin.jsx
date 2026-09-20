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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic00xab8f {
  d: path("M4 12a8 8 0 0 1 16 0");
}

.vf7cpzbkg {
  d: path("M3 14a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.wue-zto0n {
  d: path("M17 14a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="ic00xab8f"/><path class="vf7cpzbkg"/><path class="wue-zto0n"/></g>`,
		"fallback": "iconmind:headphones-outline-thin",
	});
}

export default Component;

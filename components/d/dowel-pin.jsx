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

.n6sm0py8z {
  d: path("M4.25 13h15.5a1.75 1.75 0 0 1 1.75 1.75v5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75v-5A1.75 1.75 0 0 1 4.25 13");
}

.t6vdoacwd {
  d: path("M9.5 17.5v-12l1.5-2h2l1.5 2v12Z");
}
</style><g class="hntgybcog"><path class="n6sm0py8z"/><path class="t6vdoacwd"/></g>`,
		"fallback": "uix:dowel-pin",
	});
}

export default Component;

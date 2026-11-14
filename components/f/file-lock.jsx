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

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}

.zv778ubgl {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M10.75 14h2.5A1.75 1.75 0 0 1 15 15.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 9 16.75v-1A1.75 1.75 0 0 1 10.75 14m-.5 0v-1.25a1.75 1.75 0 0 1 3.5 0V14");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="zv778ubgl"/></g>`,
		"fallback": "uix:file-lock",
	});
}

export default Component;

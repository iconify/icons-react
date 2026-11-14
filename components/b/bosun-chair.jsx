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

.i5glcvhqr {
  d: path("M4 21.5v-18h11v8m-4 4l4-4l4 4");
}

.u6462pzyd {
  d: path("M11.5 15.5h7A1.5 1.5 0 0 1 20 17a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 10 17a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="i5glcvhqr"/><path class="u6462pzyd"/></g>`,
		"fallback": "uix:bosun-chair",
	});
}

export default Component;

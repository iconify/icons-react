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

.rg7qsoywn {
  d: path("M10.875 3h2.25A7.875 7.875 0 0 1 21 10.875v2.25A7.875 7.875 0 0 1 13.125 21h-2.25A7.875 7.875 0 0 1 3 13.125v-2.25A7.875 7.875 0 0 1 10.875 3");
}

.x2ho6y6-n {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}
</style><g class="hntgybcog"><path class="rg7qsoywn"/><path class="x2ho6y6-n"/></g>`,
		"fallback": "uix:arm-track",
	});
}

export default Component;

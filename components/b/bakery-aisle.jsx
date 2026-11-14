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

.ipooqyb8m {
  d: path("M5.5 17.5C5.25 14.25 7.25 12 9.75 12h4.5c2.5 0 4.5 2.25 4.25 5.5Zm3.25-1.75l1.25-2m1.5 2l1.25-2m1.5 2l1.25-2");
}

.pfq8yoh9v {
  d: path("M2.5 2.5h19M7 2.5V6m10-3.5V6M6 6h12a3.5 3.5 0 0 1 3.5 3.5v8A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-8A3.5 3.5 0 0 1 6 6");
}
</style><g class="hntgybcog"><path class="pfq8yoh9v"/><path class="ipooqyb8m"/></g>`,
		"fallback": "uix:bakery-aisle",
	});
}

export default Component;

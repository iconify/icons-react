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

.tdy9aeb6u {
  d: path("M13.25 7.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.w9y6dpbab {
  d: path("M8.25 16a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m2.25-1c5.5-1.5-2.5-5 3-6.75");
}

.xxrh1kbuw {
  d: path("M9.375 3h5.25A4.375 4.375 0 0 1 19 7.375v9.25A4.375 4.375 0 0 1 14.625 21h-5.25A4.375 4.375 0 0 1 5 16.625v-9.25A4.375 4.375 0 0 1 9.375 3");
}
</style><g class="hntgybcog"><path class="xxrh1kbuw"/><path class="w9y6dpbab"/><path class="tdy9aeb6u"/></g>`,
		"fallback": "uix:electronic-flight-bag",
	});
}

export default Component;

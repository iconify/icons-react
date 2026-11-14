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
		"content": `<style>.erlu5ib7g {
  d: path("M9.25 10.25c-.45-.5-1-.75-1.75-.75c-1 0-1.75.5-1.75 1.25c0 1.65 3.75.85 3.75 2.5c0 .75-.9 1.25-2 1.25c-.9 0-1.5-.25-2-.75m2-5.25v1m0 5v1M13 12h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrzr6jb5x {
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6");
}
</style><g class="hntgybcog"><path class="yrzr6jb5x"/><path class="erlu5ib7g"/></g>`,
		"fallback": "uix:input-currency",
	});
}

export default Component;

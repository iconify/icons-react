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

.pmk4el0lo {
  d: path("M5.25 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.5 1.5l1 1M13 12h5.5");
}

.yrzr6jb5x {
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6");
}
</style><g class="hntgybcog"><path class="yrzr6jb5x"/><path class="pmk4el0lo"/></g>`,
		"fallback": "uix:input-search",
	});
}

export default Component;

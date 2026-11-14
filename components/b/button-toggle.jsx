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

.vzhs1u7dm {
  d: path("M8.25 9h1.5a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-1.5a3 3 0 0 1-3-3a3 3 0 0 1 3-3m1.5 3h.01m5.74 0h3.25");
}

.yrzr6jb5x {
  d: path("M6.875 6h10.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 17.125 18H6.875A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6");
}
</style><g class="hntgybcog"><path class="yrzr6jb5x"/><path class="vzhs1u7dm"/></g>`,
		"fallback": "uix:button-toggle",
	});
}

export default Component;

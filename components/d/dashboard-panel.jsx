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

.jbhroybrw {
  d: path("M6.5 16.5L10 12l3.5 2.5l4-5.5");
}

.os-5wocuz {
  d: path("M6.875 3h10.25A4.375 4.375 0 0 1 21.5 7.375v9.25A4.375 4.375 0 0 1 17.125 21H6.875A4.375 4.375 0 0 1 2.5 16.625v-9.25A4.375 4.375 0 0 1 6.875 3M6.5 7H10");
}
</style><g class="hntgybcog"><path class="os-5wocuz"/><path class="jbhroybrw"/></g>`,
		"fallback": "uix:dashboard-panel",
	});
}

export default Component;

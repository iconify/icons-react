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

.jzgts1bxf {
  d: path("M9.5 18.25V14l1.25-1.75h2.5L14.5 14v4.25Zm1-6V9h5l1 1.25M14.25 9v2");
}

.pfq8yoh9v {
  d: path("M2.5 2.5h19M7 2.5V6m10-3.5V6M6 6h12a3.5 3.5 0 0 1 3.5 3.5v8A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-8A3.5 3.5 0 0 1 6 6");
}
</style><g class="hntgybcog"><path class="pfq8yoh9v"/><path class="jzgts1bxf"/></g>`,
		"fallback": "uix:cleaning-aisle",
	});
}

export default Component;

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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.rg7-wjwig {
  d: path("M7.5 16.5v-9h4m-4 4.5h3m2.75 1.5h4.5c0-1.75-1-3-2.25-3s-2.25 1.25-2.25 3s1 3 2.25 3c1 0 1.75-.5 2.25-1.25");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="rg7-wjwig"/></g>`,
		"fallback": "uix:hemoglobin",
	});
}

export default Component;

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

.u6_jkr2cj {
  d: path("M7.375 5h9.25A4.375 4.375 0 0 1 21 9.375v5.25A4.375 4.375 0 0 1 16.625 19h-9.25A4.375 4.375 0 0 1 3 14.625v-5.25A4.375 4.375 0 0 1 7.375 5");
}

.y-u9ok5dg {
  d: path("M6.25 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m7 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m-7 5.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m7 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><g class="hntgybcog"><path class="u6_jkr2cj"/><path class="y-u9ok5dg"/></g>`,
		"fallback": "uix:cooktop",
	});
}

export default Component;

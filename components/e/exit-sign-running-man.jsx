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

.m2ce8yk9l {
  d: path("M14.5 16V9h4v7m-7.75-8.25h.01M9.75 10.5l-1.5 3l2 2.5m-2-2.5L6 16m.5-4.75l3.25-.75l2 1.75");
}

.mtuecs9vi {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5");
}
</style><g class="hntgybcog"><path class="mtuecs9vi"/><path class="m2ce8yk9l"/></g>`,
		"fallback": "uix:exit-sign-running-man",
	});
}

export default Component;

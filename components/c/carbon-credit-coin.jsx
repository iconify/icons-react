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

.pdnzt0b-s {
  d: path("M8.5 15.5c0-4.5 2.5-7 7-7c0 4.5-2.5 7-7 7m-1 1L13 11");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="pdnzt0b-s"/></g>`,
		"fallback": "uix:carbon-credit-coin",
	});
}

export default Component;

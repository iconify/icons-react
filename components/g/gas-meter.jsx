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

.zp-dl0-ud {
  d: path("M10 6h4a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 14 9h-4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 10 6m2 12.5c-1.75 0-2.75-1.25-2.75-2.75C9.25 14 10.75 13 11 11.5c1 .75 1.5 1.5 1.5 2.5c.5-.5.75-1 1-1.75c.75 1 1.25 2.25 1.25 3.5c0 1.5-1 2.75-2.75 2.75M6.25 12h.01m11.49 0h.01");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="zp-dl0-ud"/></g>`,
		"fallback": "uix:gas-meter",
	});
}

export default Component;

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

.wvaimxbzn {
  d: path("M7.75 8.5h8.5A1.75 1.75 0 0 1 18 10.25v3.5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 13.75v-3.5A1.75 1.75 0 0 1 7.75 8.5m2.75 0v7m3-7v7M5.25 5.25l13.5 13.5");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="wvaimxbzn"/></g>`,
		"fallback": "uix:anti-bribery",
	});
}

export default Component;

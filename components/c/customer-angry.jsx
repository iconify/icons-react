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
		"content": `<style>.f_cffe73u {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m-2 12.5c0-2 3.75-3.25 8.5-3.25s8.5 1.25 8.5 3.25M8.75 7.25l2 1m4.5-1l-2 1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nq2i17p9o {
  d: path("M10 12.5q2-1.5 4 0");
}
</style><g class="hntgybcog"><path class="f_cffe73u"/><path class="nq2i17p9o"/></g>`,
		"fallback": "uix:customer-angry",
	});
}

export default Component;

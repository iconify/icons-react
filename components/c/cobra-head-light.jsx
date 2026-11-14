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
		"content": `<style>.qdi5f78qp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5V7a3.5 3.5 0 0 1 3.5-3.5H11m0 0h6c2 0 2.5 1.5 2.5 2.25c0 1-1 1.75-2.5 1.75h-4.5L11 6Zm1 6.75L9 17.5m9-7.25l3 7.25");
}
</style><path class="qdi5f78qp"/>`,
		"fallback": "uix:cobra-head-light",
	});
}

export default Component;

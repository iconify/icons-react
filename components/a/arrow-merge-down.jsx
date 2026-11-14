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
		"content": `<style>.qdjoinxkn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5v4c0 3.5 5 3.5 5 7m5-11v4c0 3.5-5 3.5-5 7m0 0v6M8.5 17l3.5 3.5l3.5-3.5");
}
</style><path class="qdjoinxkn"/>`,
		"fallback": "uix:arrow-merge-down",
	});
}

export default Component;

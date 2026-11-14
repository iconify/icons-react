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
		"content": `<style>.j4hhvyy1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v5.5A3.5 3.5 0 0 1 17 15H7a3.5 3.5 0 0 1-3.5-3.5V6A3.5 3.5 0 0 1 7 2.5m-3.5 4h17m-15 13.25a6.5 1.75 0 1 0 13 0a6.5 1.75 0 1 0-13 0");
}
</style><path class="j4hhvyy1b"/>`,
		"fallback": "uix:floating-window",
	});
}

export default Component;

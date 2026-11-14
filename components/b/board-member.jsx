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
		"content": `<style>.e3ut88but {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M5 15.5c0-2.25 3.25-3.25 7-3.25s7 1 7 3.25M6.5 19.875l.174-.566a1.5 1.5 0 0 1 1.434-1.059h7.784a1.5 1.5 0 0 1 1.434 1.059l.174.566a1.256 1.256 0 0 1-1.2 1.625H7.7a1.256 1.256 0 0 1-1.2-1.625");
}
</style><path class="e3ut88but"/>`,
		"fallback": "uix:board-member",
	});
}

export default Component;

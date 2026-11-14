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
		"content": `<style>.f3bbd54an {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 14V5.25a2.75 2.75 0 0 1 5.5 0V14a4.25 4.25 0 1 1-5.5 0M8.5 7.5v7m7.75.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-1.75 6.5c0-1.5 1.5-2 3.5-2s3.5.5 3.5 2");
}
</style><path class="f3bbd54an"/>`,
		"fallback": "uix:feels-like",
	});
}

export default Component;

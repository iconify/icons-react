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
		"content": `<style>.clzw3kbev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5v15m0-9h16a2 2 0 0 1 2 2v7m-18-4h18m-13.25-9h1.5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m6.25 4l3 5");
}
</style><path class="clzw3kbev"/>`,
		"fallback": "uix:bed-making",
	});
}

export default Component;

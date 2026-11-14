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
		"content": `<style>.qe8b8o8vs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5za4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m11 0za4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-7 3q1.5-1.5 3 0M16 15h4.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3L15 21.5V16a1 1 0 0 1 1-1");
}
</style><path class="qe8b8o8vs"/>`,
		"fallback": "uix:ar-glasses-notification",
	});
}

export default Component;

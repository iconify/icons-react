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
		"content": `<style>.tm799li5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3h8.5a2.25 2.25 0 0 1 2.25 2.25a2.25 2.25 0 0 1-2.25 2.25h-8.5A2.25 2.25 0 0 1 2.5 5.25A2.25 2.25 0 0 1 4.75 3M9 7.5v13m-3.5 0h6.9m5.6-7c1 1.75 3.25 2.5 3.25 4.75a3.25 3.25 0 0 1-6.5 0c0-1.25.75-2 1.5-2.5c0 1 .5 1.5 1 1.5c0-1.5 0-2.5.75-3.75");
}
</style><path class="tm799li5e"/>`,
		"fallback": "uix:fire-handle",
	});
}

export default Component;

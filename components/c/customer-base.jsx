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
		"content": `<style>.t52ac2jxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0M7 19c0-3.5 2.25-6 5-6s5 2.5 5 6M2.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 9c0-2.5.75-4 2.25-4.25M17.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4 9c0-2.5-.75-4-2.25-4.25");
}
</style><path class="t52ac2jxa"/>`,
		"fallback": "uix:customer-base",
	});
}

export default Component;

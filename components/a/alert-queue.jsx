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
		"content": `<style>.la0-iyb6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h17.5M3 9.5h17.5M3 15h7m8.826.504l2.008 3.794a1.5 1.5 0 0 1-1.325 2.202h-4.018a1.5 1.5 0 0 1-1.325-2.202l2.008-3.794a1.5 1.5 0 0 1 2.652 0M17.5 16.75v.75m0 2.25h.01");
}
</style><path class="la0-iyb6m"/>`,
		"fallback": "uix:alert-queue",
	});
}

export default Component;

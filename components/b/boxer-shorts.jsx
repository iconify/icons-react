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
		"content": `<style>.e-2uclb_g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 18 7H6a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 6 4M4.5 7L3 20.5h7.5l1.5-7l1.5 7H21L19.5 7");
}
</style><path class="e-2uclb_g"/>`,
		"fallback": "uix:boxer-shorts",
	});
}

export default Component;

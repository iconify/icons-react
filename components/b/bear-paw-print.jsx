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
		"content": `<style>.ryvc_0bsq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 16a6.5 5 0 1 0 13 0a6.5 5 0 1 0-13 0m-3-6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m2.75-4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.25-2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.25 2a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M18.5 10a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><path class="ryvc_0bsq"/>`,
		"fallback": "uix:bear-paw-print",
	});
}

export default Component;

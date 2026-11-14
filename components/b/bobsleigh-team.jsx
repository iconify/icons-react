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
		"content": `<style>.qhq3gftxp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8.5H17a3 3 0 0 1 3 3a3 3 0 0 1-3 3H6.5a3 3 0 0 1-3-3a3 3 0 0 1 3-3m-1 0a2.25 2.25 0 0 1 4.5 0m2.75 0a2.25 2.25 0 0 1 4.5 0M3.5 18h6m3 0H18q2 0 2.5-1.25");
}
</style><path class="qhq3gftxp"/>`,
		"fallback": "uix:bobsleigh-team",
	});
}

export default Component;

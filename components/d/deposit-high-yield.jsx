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
		"content": `<style>.wzi5eab3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 18.5l9.5-13m-10.25 2a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6.5 9a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M18.5 21V4m-3 3l3-3l3 3");
}
</style><path class="wzi5eab3a"/>`,
		"fallback": "uix:deposit-high-yield",
	});
}

export default Component;

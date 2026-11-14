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
		"content": `<style>.g1a37ob3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 2.5V8a7 7 0 1 0 4.5 0V2.5m-6 0h7.5M6 11h12m-8 6.5h.01m3.99-3h.01");
}
</style><path class="g1a37ob3u"/>`,
		"fallback": "uix:base-alkali",
	});
}

export default Component;

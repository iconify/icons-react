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
		"content": `<style>.mb_kmjwus {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 21l.75-11h3.5l.75 11Zm-1-11h7m-5 0V6.5l1.5-3l1.5 3V10m3.943-5.877l2-.8A1.5 1.5 0 0 1 18.5 4.716v2.068a1.5 1.5 0 0 1-2.057 1.393l-2-.8a1.5 1.5 0 0 1-.943-1.393v-.468a1.5 1.5 0 0 1 .943-1.393M10.5 5.75h3");
}
</style><path class="mb_kmjwus"/>`,
		"fallback": "uix:call-to-prayer-speaker",
	});
}

export default Component;

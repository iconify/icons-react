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
		"content": `<style>.ahwwfuvyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.5c0-3 2.5-4 4.5-4.5V5a2.5 2.5 0 0 1 5 0v5c2 .5 4.5 1.5 4.5 4.5m-13.75 0h13.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 18.75 18H5.25a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75M3 21h18");
}
</style><path class="ahwwfuvyo"/>`,
		"fallback": "uix:bottle-nipple",
	});
}

export default Component;

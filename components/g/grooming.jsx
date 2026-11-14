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
		"content": `<style>.m1eldth3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 5h8.5A1.75 1.75 0 0 1 21 6.75a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 9 6.75A1.75 1.75 0 0 1 10.75 5m4.053 4.197za1.5 1.5 0 0 1 0 2.121l-8.485 8.485a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l8.485-8.485a1.5 1.5 0 0 1 2.121 0M11 5V3.25l1-.75M14 5V3.25l1-.75M17 5V3.25l1-.75M20 5V3.25l1-.75");
}
</style><path class="m1eldth3x"/>`,
		"fallback": "uix:grooming",
	});
}

export default Component;

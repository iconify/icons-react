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
		"content": `<style>.w-kqusvcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10h11q2.5 5.75 0 11.5h-11Q4 15.75 6.5 10M8 2.5l7.5 4.75M16 2.5L8.5 7.25");
}
</style><path class="w-kqusvcm"/>`,
		"fallback": "uix:dhak-drum",
	});
}

export default Component;

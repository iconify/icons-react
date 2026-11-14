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
		"content": `<style>.w_7qifc-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 12.5h6.5A2.75 2.75 0 0 1 17 15.25A2.75 2.75 0 0 1 14.25 18h-6.5A2.75 2.75 0 0 1 5 15.25a2.75 2.75 0 0 1 2.75-2.75m6.25 0l3-2.75C14.5 7.5 15.5 3 19 3c1.75 0 2.75 1.5 2.5 2.5l-2.75.5l2.75 1.75c-.75 2-2.75 2.75-4.5 2M8 12.5L5.5 9.75m4.25 2.75V10m2.75 2.5V10M5 15.5l-2.25 2m14.25-2l2.25 2M3 21h18");
}
</style><path class="w_7qifc-p"/>`,
		"fallback": "uix:fiddler-crab",
	});
}

export default Component;

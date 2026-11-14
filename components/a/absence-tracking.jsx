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
		"content": `<style>.lr897rhbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3v9q0 3 3 3h6.25M7 15v4.5m-4 0h8m3.5-8v8m2.5-8v8m2.5-8v8m2.5-8v8m-8.75-1.75L22 13");
}
</style><path class="lr897rhbh"/>`,
		"fallback": "uix:absence-tracking",
	});
}

export default Component;

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
		"content": `<style>.sdnh-t08t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m-3 13c0-3.75 3-6.25 7-6.25c1.25 0 2.25 0 3 .25m1.75 3.5l2 2L21 15.75");
}
</style><path class="sdnh-t08t"/>`,
		"fallback": "uix:follow-check",
	});
}

export default Component;

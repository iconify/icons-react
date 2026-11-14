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
		"content": `<style>.bcj3k-b4r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 19.5l8.5-15M2.75 7a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m6.5 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m9.25 3V4.5m-3 3l3-3l3 3");
}
</style><path class="bcj3k-b4r"/>`,
		"fallback": "uix:apy",
	});
}

export default Component;

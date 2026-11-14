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
		"content": `<style>.q3istdftc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21.5V5a2.5 2.5 0 0 1 5 0v16.5m-5-7.5H7a2.5 2.5 0 0 1-2.5-2.5V8m10 4H17a2.5 2.5 0 0 0 2.5-2.5V6m-14 15.5h13");
}
</style><path class="q3istdftc"/>`,
		"fallback": "uix:cactus",
	});
}

export default Component;

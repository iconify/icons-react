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
		"content": `<style>.joxau-bfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M2.5 21c0-3.75 2.75-6.25 6-6.25s6 2.5 6 6.25M15 6a2.75 3.5 0 1 0 5.5 0A2.75 3.5 0 1 0 15 6m2.75 3.5V15");
}
</style><path class="joxau-bfk"/>`,
		"fallback": "uix:badminton-player",
	});
}

export default Component;

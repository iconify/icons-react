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
		"content": `<style>.wpeqx0bfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 6.5c0-3.75 8-3.75 8 0m-9.5 0h11M8.25 9.25a3.75 3.75 0 0 0 7.5 0M4.5 21.5c0-3 3.25-5.25 7.5-5.25q.684 0 1.33.076m4.42 2.174a1 1 0 0 1 2 0a2 2 0 0 1-4 0a3 3 0 0 1 6 0");
}
</style><path class="wpeqx0bfv"/>`,
		"fallback": "uix:boatswain",
	});
}

export default Component;

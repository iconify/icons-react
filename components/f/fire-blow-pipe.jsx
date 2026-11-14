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
		"content": `<style>.sim0apbfm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.5 17.5l6-6a1.414 1.414 0 0 1 2 0a1.414 1.414 0 0 1 0 2l-6 6a1.414 1.414 0 0 1-2 0a1.414 1.414 0 0 1 0-2m-1.75.25l3.5 3.5M18 2.5c2.25 2.25 3 4 3 6a3 3 0 0 1-6 0c0-2 .75-3.75 3-6");
}
</style><path class="sim0apbfm"/>`,
		"fallback": "uix:fire-blow-pipe",
	});
}

export default Component;

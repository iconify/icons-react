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
		"content": `<style>.c_nj4wb3g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12h9.5a3.5 3.5 0 0 1 3.5 3.5v2a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-2A3.5 3.5 0 0 1 6 12m15.5 3v3M6.25 5.5a6.5 6.5 0 0 1 9 0m-7 2.5a3.5 3.5 0 0 1 5 0");
}
</style><path class="c_nj4wb3g"/>`,
		"fallback": "uix:battery-wireless",
	});
}

export default Component;

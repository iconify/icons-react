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
		"content": `<style>.hm_pujt-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 18.5a5.5 2.5 0 1 0 11 0a5.5 2.5 0 1 0-11 0M3.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m9.75.5Q15.5 9 15.5 13");
}
</style><path class="hm_pujt-e"/>`,
		"fallback": "uix:golf-putt",
	});
}

export default Component;

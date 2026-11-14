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
		"content": `<style>.twyqr5bcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5a9 9 0 0 1 18 0M7.5 5.75L9 8.25m7.5-2.5L15 8.25m-3 5.25l5.25-3m-5.25 3h.01M18 14.75v3.5M18 21h.01");
}
</style><path class="twyqr5bcf"/>`,
		"fallback": "uix-sharp:climate-risk-gauge",
	});
}

export default Component;

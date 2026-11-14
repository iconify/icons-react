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
		"content": `<style>.k4pa_h-_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3L3 6.5L5 11l2-1v11h10V10l2 1l2-4.5L16 3c-1 2-2.5 2.5-4 2.5S9 5 8 3ZM7 14h10M7 17h10");
}
</style><path class="k4pa_h-_k"/>`,
		"fallback": "uix-sharp:hockey-jersey",
	});
}

export default Component;

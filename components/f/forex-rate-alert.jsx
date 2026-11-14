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
		"content": `<style>.fmcnpgbja {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7.5h14M14.5 4L18 7.5L14.5 11M13 16.5H6M9.5 13L6 16.5L9.5 20m6.25-2.75a2.25 2.25 0 0 1 4.5 0v1.25l.75 1.25h-6l.75-1.25Zm1.5 4.25h1.5");
}
</style><path class="fmcnpgbja"/>`,
		"fallback": "uix-sharp:forex-rate-alert",
	});
}

export default Component;

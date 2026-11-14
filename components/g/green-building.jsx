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
		"content": `<style>.cx75i8bxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.2 21.5H3v-19h10.25v18.85M6.5 7h.01m3.24 0h.01M6.5 11h.01m3.24 0h.01M6.5 15h.01m3.24 0h.01M16 21.5c0-4.5 2-6.5 5.75-6.5c0 4.5-2 6.5-5.75 6.5Z");
}
</style><path class="cx75i8bxz"/>`,
		"fallback": "uix-sharp:green-building",
	});
}

export default Component;

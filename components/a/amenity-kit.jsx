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
		"content": `<style>.hgt5z6f5d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 8h3.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 10.125 20h-3.25A4.375 4.375 0 0 1 2.5 15.625v-3.25A4.375 4.375 0 0 1 6.875 8M6 8V6.5a2.5 2.5 0 0 1 5 0V8m7.5 1h1.75v2l1.25 1.5V19a1 1 0 0 1-1 1h-2.25a1 1 0 0 1-1-1v-6.5L18.5 11Zm-16 2.5h12");
}
</style><path class="hgt5z6f5d"/>`,
		"fallback": "uix:amenity-kit",
	});
}

export default Component;

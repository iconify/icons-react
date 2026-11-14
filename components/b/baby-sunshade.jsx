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
		"content": `<style>.l8_3xwf6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11h17c0 3.25-3.5 5-8.5 5s-8.5-1.75-8.5-5Zm0 0A8.5 8.5 0 0 1 12 2.5V11m8.5 0q0-4.5 1.5-5.5M5.75 19.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm9 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="l8_3xwf6x"/>`,
		"fallback": "uix-sharp:baby-sunshade",
	});
}

export default Component;

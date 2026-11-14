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
		"content": `<style>.uodah_b1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.944 20.5H3.5v-10L12 3.25l8.5 7.25v1.756M17 15l-.75 6.5M20 15l-.75 6.5M15 17h6.25m-6.5 2.75H21");
}
</style><path class="uodah_b1z"/>`,
		"fallback": "uix-sharp:house-number",
	});
}

export default Component;

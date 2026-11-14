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
		"content": `<style>.gaq4lzbhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11.5L8 10l2.5 1.5L13 10l2.5 1.5l3-1.5c-.5-4.5-3-7.5-6.5-7.5s-6.25 3-6.5 9Zm0 3.5L8 13.5l2.5 1.5l2.5-1.5l2.5 1.5l3-1.5c0 5-3 8-6.5 8s-6.5-3-6.5-6.5Z");
}
</style><path class="gaq4lzbhp"/>`,
		"fallback": "uix-sharp:egg-cracked",
	});
}

export default Component;

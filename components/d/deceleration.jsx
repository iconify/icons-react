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
		"content": `<style>.w0aj82b-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.1 15.5H8V4h11.5v7.7M2.5 7h3.25M2.5 11h3.25M18 14.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="w0aj82b-p"/>`,
		"fallback": "uix-sharp:deceleration",
	});
}

export default Component;

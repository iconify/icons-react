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
		"content": `<style>.aieiarnzd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 2.5h4.5l1.5 19h-7.5ZM13.5 8H19m-5.75 5h6M3 18h7m-2.75-2.75L10 18l-2.75 2.75");
}
</style><path class="aieiarnzd"/>`,
		"fallback": "uix-sharp:carbon-capture-tower",
	});
}

export default Component;

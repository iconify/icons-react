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
		"content": `<style>.r3hx_mbpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 8.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm-2.25 12c0-3.25 2.5-5.25 6-5.25s5.5 2 5.5 5.25c0 .6-.4 1-1 1H3.5c-.6 0-1-.4-1-1ZM17 2.5v19m0-19h4.5V7H17");
}
</style><path class="r3hx_mbpv"/>`,
		"fallback": "uix-sharp:ambassador",
	});
}

export default Component;

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
		"content": `<style>.dpzqb5bov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.572 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.115 0 2.16.155 3.097.442M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 14.5h11v-11Z");
}
</style><path class="dpzqb5bov"/>`,
		"fallback": "uix-sharp:architect",
	});
}

export default Component;

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
		"content": `<style>.sv4esbb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 17h19v2.5h-19ZM5 12h5l-.75 5h-3.5Zm9 0h5l-.75 5h-3.5Zm-6.5 0V8m0 1.5c0-2.5-1.75-4-4.25-4c0 2.5 1.75 4 4.25 4Zm0-1.5c0-2.5 1.75-4 4-4c0 2.5-1.75 4-4 4Zm7.5 4V6.5a1.5 1.5 0 0 1 3 0V12");
}
</style><path class="sv4esbb0m"/>`,
		"fallback": "uix-sharp:indoor-garden",
	});
}

export default Component;

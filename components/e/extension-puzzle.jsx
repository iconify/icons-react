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
		"content": `<style>.dchu32b0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5h5.25a2.5 2.5 0 0 1 5 0H18v4.25a2.5 2.5 0 0 1 0 5V21h-4.25a2.5 2.5 0 0 0-5 0H3.5Z");
}
</style><path class="dchu32b0h"/>`,
		"fallback": "uix-sharp:extension-puzzle",
	});
}

export default Component;

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
		"content": `<style>.c_ls7iu5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5h18v12H3Zm3.5 0V4m11 2.5V4M9 6.5v12m6-12v12");
}
</style><path class="c_ls7iu5z"/>`,
		"fallback": "uix-sharp:battery-module",
	});
}

export default Component;

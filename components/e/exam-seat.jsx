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
		"content": `<style>.hqt-mxbrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10V12H7ZM5.5 12h13v4.5h-13ZM8 16.5V21m8-4.5V21");
}
</style><path class="hqt-mxbrb"/>`,
		"fallback": "uix-sharp:exam-seat",
	});
}

export default Component;

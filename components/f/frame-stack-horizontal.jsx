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
		"content": `<style>.hinp8wb5j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h7.5V12H3Zm10.5 0H21V12h-7.5Zm-10 15h17M18 15.75l2.75 2.75L18 21.25");
}
</style><path class="hinp8wb5j"/>`,
		"fallback": "uix-sharp:frame-stack-horizontal",
	});
}

export default Component;

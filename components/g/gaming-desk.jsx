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
		"content": `<style>.ycn_7cb2r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5q8-1.5 16 0V11q-8-1.5-16 0Zm8 6.75v4.25m-9.5 0h19m-17 0v7m15-7v7");
}
</style><path class="ycn_7cb2r"/>`,
		"fallback": "uix-sharp:gaming-desk",
	});
}

export default Component;

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
		"content": `<style>.wlclo1b5x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8h7v8h-7Zm-6 4h6M6 9.5L8.5 12L6 14.5M21.5 12h-6M18 9.5L15.5 12l2.5 2.5");
}
</style><path class="wlclo1b5x"/>`,
		"fallback": "uix-sharp:balanced-forces",
	});
}

export default Component;

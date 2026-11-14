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
		"content": `<style>.ux-oqob1i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19V5m9 12.5L8 12l5.5-5.5m6 11L14 12l5.5-5.5");
}
</style><path class="ux-oqob1i"/>`,
		"fallback": "uix-sharp:chevrons-left-line",
	});
}

export default Component;

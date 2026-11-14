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
		"content": `<style>.hlqa37byw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4.5V20m0-4h18M5.75 10.25h3.5v3h-3.5ZM12 16v-4.5h7.5A1.5 1.5 0 0 1 21 13v7");
}
</style><path class="hlqa37byw"/>`,
		"fallback": "uix-sharp:bed-made",
	});
}

export default Component;

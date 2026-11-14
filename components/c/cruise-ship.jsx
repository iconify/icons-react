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
		"content": `<style>.skaml3pox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 14h18l-2.5 6h-13Zm4-6h10v6H7Zm5 0V4.5");
}
</style><path class="skaml3pox"/>`,
		"fallback": "uix-sharp:cruise-ship",
	});
}

export default Component;

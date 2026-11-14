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
		"content": `<style>.n1py7fb0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14.5c-2-4 2.5-8 8-8s10 4 8 8Zm3.875 0h8.25a1.375 1.375 0 0 1 1.375 1.375a1.375 1.375 0 0 1-1.375 1.375h-8.25A1.375 1.375 0 0 1 6.5 15.875A1.375 1.375 0 0 1 7.875 14.5M12 6.5V4.25");
}
</style><path class="n1py7fb0d"/>`,
		"fallback": "uix:beret",
	});
}

export default Component;

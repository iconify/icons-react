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
		"content": `<style>.n__b4fbza {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7v7H3Zm11 0h7v7h-7ZM3 14h7v7H3Zm3.5-7.5h.01m10.99 0h.01M6.5 17.5h.01m8.24.5l2 2L21 15.75");
}
</style><path class="n__b4fbza"/>`,
		"fallback": "uix-sharp:check-in-qr",
	});
}

export default Component;

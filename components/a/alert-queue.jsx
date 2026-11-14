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
		"content": `<style>.tqlpu0b9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h17.5M3 9.5h13.2m2.6 0h1.7M3 15h7m7.5-2l4.5 8.5h-9Zm0 3.75v.75m0 2.25h.01");
}
</style><path class="tqlpu0b9h"/>`,
		"fallback": "uix-sharp:alert-queue",
	});
}

export default Component;

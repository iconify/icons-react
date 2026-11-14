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
		"content": `<style>.h1s_tmbxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9.5 3.5h7V21h-7ZM2.5 21v-4a4.5 4.5 0 0 1 9 0v4m5-7h2M15 4h5v3.5h-5Z");
}
</style><path class="h1s_tmbxo"/>`,
		"fallback": "uix-sharp:checkout-queue-short",
	});
}

export default Component;

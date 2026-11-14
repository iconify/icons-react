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
		"content": `<style>.raporibtk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14.5h19V20h-19Zm.5-11h6.5v5H3Zm3.25 5v6m6.75-6h6v6h-6Zm-6 8.75h.01m4.99 0h.01m4.99 0h.01");
}
</style><path class="raporibtk"/>`,
		"fallback": "uix-sharp:checkout-lane",
	});
}

export default Component;

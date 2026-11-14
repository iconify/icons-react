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
		"content": `<style>.f0me3hbjv {
  d: path("M10.5 15.5v3a3 3 0 0 1-3 3H3m4.75-19V6m5.5-3.5V6m6.25 8a2.5 2.5 0 1 0 2.5 2.5h-2.5Zm-1.75 4.25L14.5 21.5");
}

.olz-o_b1z {
  d: path("M4.5 6h12v3.5a6 6 0 0 1-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="olz-o_b1z"/><path class="f0me3hbjv"/></g>`,
		"fallback": "uix-sharp:charger-maintenance",
	});
}

export default Component;

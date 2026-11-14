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
		"content": `<style>.fesm2hb2j {
  d: path("M4.5 10.5h15v11h-15Zm4-2.75V6a3.5 3.5 0 0 1 7 0v1.75");
}

.fqr0r3bdv {
  d: path("m4.5 15.5l4.5 2l3-3l3 2.5l4.5-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fesm2hb2j"/><path class="fqr0r3bdv"/></g>`,
		"fallback": "uix-sharp:broken-lock",
	});
}

export default Component;

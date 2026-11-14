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
		"content": `<style>.ew8mznbjg {
  d: path("m3.889 13.951l3.031-1.75l1.5 2.598l-3.031 1.75Zm9.361-.701L10 20.5m3.25-7.25l3.25 7.25");
}

.l5um8d-zr {
  d: path("m6.42 11.335l8.66-5l2.5 4.33l-8.66 5Zm8.16-5.866l2.598-1.5l3.5 6.062l-2.598 1.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l5um8d-zr"/><path class="ew8mznbjg"/></g>`,
		"fallback": "uix-sharp:eyepiece-telescope",
	});
}

export default Component;

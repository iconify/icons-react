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
		"content": `<style>.cxrczhbnp {
  d: path("M6.25 4.25v7a5.75 5.75 0 0 0 11.5 0v-7");
}

.r2y6rxbxt {
  d: path("M3.5 4.25v7a8.5 8.5 0 0 0 17 0v-7H15v7a3 3 0 0 1-6 0v-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r2y6rxbxt"/><path class="cxrczhbnp"/></g>`,
		"fallback": "uix-sharp:hockey-mouthguard",
	});
}

export default Component;

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
		"content": `<style>.bzb_h2b9k {
  d: path("M7.25 2.5L5.75 14m6.5-11.5L10.75 14M3.5 6.25h11.25M3 10.25h11.25M2.5 19.5h1.25m2.75 0h1.25m5.75-2a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm0 0h8");
}

.hrsb_ybcn {
  d: path("M17.5 13.5c-2 2-2 6 0 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bzb_h2b9k"/><path class="hrsb_ybcn"/></g>`,
		"fallback": "uix-sharp:bank-iban",
	});
}

export default Component;

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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.u2sbetb2q {
  d: path("M13.344 20.5H3.5v-10L12 3.25l8.5 7.25v1.856m0 7.8v.344h-.356");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u2sbetb2q"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:build-complete",
	});
}

export default Component;

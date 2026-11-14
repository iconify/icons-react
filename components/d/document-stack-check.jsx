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

.i8vbytxuu {
  d: path("M14.3 21.5H3.5v-13h17v3.8m0 7.9v1.3h-1.3M5.5 5.5h13m-11-3h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i8vbytxuu"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:document-stack-check",
	});
}

export default Component;

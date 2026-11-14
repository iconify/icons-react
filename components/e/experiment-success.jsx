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
		"content": `<style>.buvfrlbqv {
  d: path("M13.816 21H2.5l6-12V2.5H13V9l3.354 6.708M6.5 13H15");
}

.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="buvfrlbqv"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:experiment-success",
	});
}

export default Component;

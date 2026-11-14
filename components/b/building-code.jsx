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

.o4-7vsbpi {
  d: path("M14.3 21.5H4.5v-19h15v10.8m0 7.9v.3h-.3M8 2.5v19M11 7h5m-5 4h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o4-7vsbpi"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:building-code",
	});
}

export default Component;

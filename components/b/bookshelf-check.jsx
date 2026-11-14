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

.i3prevbvs {
  d: path("M13.3 20.5H2.5v-18h17v10.8m-17-1.8h17M6 5.5v6m2.75-6v6m3-5.5l2.75 5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i3prevbvs"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:bookshelf-check",
	});
}

export default Component;

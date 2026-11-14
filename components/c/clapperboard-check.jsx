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

.ktihmqbph {
  d: path("M13.3 20.5H3v-11h18v2.3m0 7.9v.8h-.8M3.25 9.5L2.5 6l17-3l.75 3.5Zm5-4.75L10 8.25m3.5-4.5l1.75 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ktihmqbph"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix-sharp:clapperboard-check",
	});
}

export default Component;

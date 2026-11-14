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
		"content": `<style>.i0zb51t1k {
  d: path("m3 14.5l9-10l9 10q-9 2.5-18 0Z");
}

.n8l86rbdw {
  d: path("M7.25 15.5q4.75 6.5 9.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0zb51t1k"/><path class="n8l86rbdw"/></g>`,
		"fallback": "uix-sharp:conical-hat",
	});
}

export default Component;

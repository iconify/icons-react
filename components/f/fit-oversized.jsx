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
		"content": `<style>.c3utu1b2z {
  d: path("M9.5 3q2.5 2.25 5 0L20 5l1.5 10H18v5.75q-6 1.25-12 0V15H2.5L4 5Z");
}

.et7k4z88t {
  d: path("M17.75 4.25Q17 10 18 15M6.25 4.25Q7 10 6 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c3utu1b2z"/><path class="et7k4z88t"/></g>`,
		"fallback": "uix-sharp:fit-oversized",
	});
}

export default Component;

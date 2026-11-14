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
		"content": `<style>.fc-rdm99u {
  d: path("M8.5 3L12 8l3.5-5ZM12 8.5l-1.5 2l1 1.5l-1 6l1.5 1.5l1.5-1.5l-1-6l1-1.5Z");
}

.piuekebvo {
  d: path("M8.5 3L3 5.5L2 10l3.5 1L6 9.5V21h12V9.5l.5 1.5l3.5-1l-1-4.5L15.5 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="piuekebvo"/><path class="fc-rdm99u"/></g>`,
		"fallback": "uix-sharp:category-mens-fashion",
	});
}

export default Component;

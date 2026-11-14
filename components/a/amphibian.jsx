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
		"content": `<style>.teq--xbwy {
  d: path("M7.5 14q4.5 2.5 9 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w079honqu {
  d: path("M4.5 9.5a3 3 0 1 1 5 0h5a3 3 0 1 1 5 0c2 1.5 2.25 5.5 0 7.5c-3 2.75-12 2.75-15 0c-2.25-2-2-6 0-7.5ZM7 8h.01M17 8h.01");
}
</style><g class="ulnmmdpxh"><path class="w079honqu"/><path class="teq--xbwy"/></g>`,
		"fallback": "uix-sharp:amphibian",
	});
}

export default Component;

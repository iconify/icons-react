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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}

.yb41r-eke {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2.75 0h.01m11.49 0h.01");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="yb41r-eke"/></g>`,
		"fallback": "uix-sharp:banknote",
	});
}

export default Component;

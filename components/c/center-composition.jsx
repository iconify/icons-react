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
		"content": `<style>.lf8u7cbcn {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3-7.5v1.75m0 11.5v1.75M2.5 12h3.75m11.5 0h3.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wrcg6qhaf {
  d: path("M2.5 4.5h19v15h-19Z");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="lf8u7cbcn"/></g>`,
		"fallback": "uix-sharp:center-composition",
	});
}

export default Component;

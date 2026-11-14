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
		"content": `<style>.o0cfrty2q {
  d: path("M2.5 19.5a12 12 0 0 1 12-12a7 7 0 0 1 7 7a4 4 0 0 1-4 4A2.5 2.5 0 0 1 15 16");
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
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="o0cfrty2q"/></g>`,
		"fallback": "uix-sharp:golden-spiral",
	});
}

export default Component;

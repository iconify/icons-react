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

.yv_xyj95l {
  d: path("M6.75 9.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm7 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-8 6.25c0-1.6 1.25-2.75 2.75-2.75s2.75 1.15 2.75 2.75m1.5 0c0-1.6 1.25-2.75 2.75-2.75s2.75 1.15 2.75 2.75");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="yv_xyj95l"/></g>`,
		"fallback": "uix-sharp:contact-group",
	});
}

export default Component;

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
		"content": `<style>.mnb1ubb5a {
  d: path("m6 15l12-6m-2.75-1L18 9l-1 2.75M18 15l-3.5-1.75m-5-2.5L6 9m2.75-1L6 9l1 2.75");
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
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="mnb1ubb5a"/></g>`,
		"fallback": "uix-sharp:heat-recovery-unit",
	});
}

export default Component;

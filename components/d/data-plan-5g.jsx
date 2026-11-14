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

.z6_vblfzf {
  d: path("M6 15.5a6 6 0 0 1 12 0m-6 0l2.25-2.25M12 15.5h.01");
}
</style><g class="ulnmmdpxh"><path class="wrcg6qhaf"/><path class="z6_vblfzf"/></g>`,
		"fallback": "uix-sharp:data-plan-5g",
	});
}

export default Component;

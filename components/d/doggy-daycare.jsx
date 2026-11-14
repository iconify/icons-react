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
		"content": `<style>.bsayvob-x {
  d: path("m4 13l8-5.5l8 5.5v8H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1f85abnr {
  d: path("M10 21v-3a2 2 0 0 1 4 0v3m-7.75-9.75a5.8 5.8 0 1 1 11.5 0m-13-5L3 5.25m16.25 1l1.75-1");
}
</style><g class="ulnmmdpxh"><path class="bsayvob-x"/><path class="x1f85abnr"/></g>`,
		"fallback": "uix-sharp:doggy-daycare",
	});
}

export default Component;

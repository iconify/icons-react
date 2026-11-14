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
		"content": `<style>.hwft70hxo {
  d: path("M7 20.5v-6h4v6m3.5-.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}

.u__oc7b5x {
  d: path("M11.744 20.5H3.5v-10L12 3.25l8.5 7.25v1.056");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u__oc7b5x"/><path class="hwft70hxo"/></g>`,
		"fallback": "uix-sharp:housing-first",
	});
}

export default Component;

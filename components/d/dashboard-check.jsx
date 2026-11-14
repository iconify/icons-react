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

.xbv2tibrf {
  d: path("M14.1 21.5H2.5v-19h19v9.3m0 7.9v1.8h-1.7M2.5 11h19M11 11v6.6m0 .8v3.1");
}

.zuh4fjb8n {
  d: path("m6 8l3-2.25l3.5 1.5L18 5.5M14.5 18l2.5 2.5l4.5-5");
}
</style><g class="ulnmmdpxh"><path class="xbv2tibrf"/><path class="zuh4fjb8n"/></g>`,
		"fallback": "uix-sharp:dashboard-check",
	});
}

export default Component;

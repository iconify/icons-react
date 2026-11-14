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
		"content": `<style>.k90ecvb-u {
  d: path("m6 8l3-2.25l3.5 1.5L18 5.5M14.5 15h7L19 18.25v3.25l-2-1v-2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y65q58qpj {
  d: path("M14.2 21.5H2.5v-19h19v9.7M2.5 11h19M11 11v1.2m0 2.8v6.5");
}
</style><g class="ulnmmdpxh"><path class="y65q58qpj"/><path class="k90ecvb-u"/></g>`,
		"fallback": "uix-sharp:dashboard-filter",
	});
}

export default Component;

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
		"content": `<style>.hcyrzl0yf {
  d: path("M2.5 7h19v13.5h-19Zm6 0V5A1.5 1.5 0 0 1 10 3.5h4A1.5 1.5 0 0 1 15.5 5v2m-13 5.5H10m4 0h7.5");
}

.tup8ddcxs {
  d: path("M10 11h4v3h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hcyrzl0yf"/><path class="tup8ddcxs"/></g>`,
		"fallback": "uix-sharp:briefcase-classic",
	});
}

export default Component;

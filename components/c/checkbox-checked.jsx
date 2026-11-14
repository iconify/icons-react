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
		"content": `<style>.lw6t35brr {
  d: path("M4 4h16v16H4Z");
}

.m2g2-tdsd {
  d: path("m7.75 12l3 3l5.5-5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lw6t35brr"/><path class="m2g2-tdsd"/></g>`,
		"fallback": "uix-sharp:checkbox-checked",
	});
}

export default Component;

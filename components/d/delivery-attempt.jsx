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
		"content": `<style>.mtlea9ntp {
  d: path("m13.25 19.5l1.5-1.75l1.5 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2omgtb1b {
  d: path("M11.3 17.5H2.5V3H18v8.9M2.5 8H18m-7.75-5v5M18 14.75A3.25 3.25 0 1 1 14.75 18");
}
</style><g class="ulnmmdpxh"><path class="z2omgtb1b"/><path class="mtlea9ntp"/></g>`,
		"fallback": "uix-sharp:delivery-attempt",
	});
}

export default Component;

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
		"content": `<style>.r55khgbdp {
  d: path("M5.75 15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4.5 0h7.25M15 15v2.5m2.5-2.5v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-4nlzq4k {
  d: path("M3 10.5L12 3l9 7.5V21H3Z");
}
</style><g class="ulnmmdpxh"><path class="w-4nlzq4k"/><path class="r55khgbdp"/></g>`,
		"fallback": "uix-sharp:house-for-rent",
	});
}

export default Component;

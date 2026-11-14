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
		"content": `<style>.azugnvbfp {
  d: path("M4.5 14L12 9l7.5 5v7.5h-15Z");
}

.lft9d5bss {
  d: path("M10 21.5v-4h4v4M9.879 6.879a3 3 0 0 1 4.242 0M7.404 4.404a6.5 6.5 0 0 1 9.192 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="azugnvbfp"/><path class="lft9d5bss"/></g>`,
		"fallback": "uix-sharp:house-wifi",
	});
}

export default Component;

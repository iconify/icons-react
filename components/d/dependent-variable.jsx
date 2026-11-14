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
		"content": `<style>.ha6liac6i {
  d: path("M6.5 17.5a9 9 0 0 0 2.586-.697m7.031-6.426C17.223 8.843 18.345 7.053 19.5 5M11 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.p8u760b4u {
  d: path("M3.5 3v17.5H21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="p8u760b4u"/><path class="ha6liac6i"/></g>`,
		"fallback": "uix-sharp:dependent-variable",
	});
}

export default Component;

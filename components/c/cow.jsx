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
		"content": `<style>.gltqjebpz {
  d: path("M8 6h8a1.5 1.5 0 0 1 1.5 1.5v5c0 1 .5 1.5.5 3.5a4.5 4.5 0 0 1-4.5 4.5h-3A4.5 4.5 0 0 1 6 16c0-2 .5-2.5.5-3.5v-5A1.5 1.5 0 0 1 8 6Z");
}

.nwnlv8bvn {
  d: path("M8.5 6c-2.5-.5-4-1.75-4-3.5m11 3.5c2.5-.5 4-1.75 4-3.5m-13 5.75C5 7.75 3 8 2.5 9.75c1 1.25 2.75 1.25 4 .75m11-2.25c1.5-.5 3.5-.25 4 1.5c-1 1.25-2.75 1.25-4 .75m-8 0h.01m4.99 0h.01M10 17h.01M14 17h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gltqjebpz"/><path class="nwnlv8bvn"/></g>`,
		"fallback": "uix-sharp:cow",
	});
}

export default Component;

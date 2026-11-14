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
		"content": `<style>.cvlzg2bsr {
  d: path("M6 7q2 2 4 0m4 0q2 2 4 0m1.5 8a3.5 3.5 0 1 0 2 4.5a2.75 2.75 0 0 1-2-4.5Z");
}

.mhsm2yefg {
  d: path("M4 4c4-1.5 12-1.5 16 0c1.5.5 1.5 7 0 7.5c-4 1.5-6-1-8-1s-4 2.5-8 1C2.5 11 2.5 4.5 4 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mhsm2yefg"/><path class="cvlzg2bsr"/></g>`,
		"fallback": "uix-sharp:beauty-sleep",
	});
}

export default Component;

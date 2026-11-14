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
		"content": `<style>.djsc1rbqt {
  d: path("M14 2.5v5h5m-7 3.25l3.031 1.75V16L12 17.75L8.969 16v-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xo_bj369l {
  d: path("M7 2.5h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z");
}
</style><g class="ulnmmdpxh"><path class="xo_bj369l"/><path class="djsc1rbqt"/></g>`,
		"fallback": "uix-sharp:design-token",
	});
}

export default Component;

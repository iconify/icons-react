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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umbr3r9bj {
  d: path("M14 2.5v5h5m-10.5 7h7m-2.75-2.75l2.75 2.75l-2.75 2.75");
}

.xo_bj369l {
  d: path("M7 2.5h7l5 5v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2Z");
}
</style><g class="ulnmmdpxh"><path class="xo_bj369l"/><path class="umbr3r9bj"/></g>`,
		"fallback": "uix-sharp:forward-page",
	});
}

export default Component;

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
		"content": `<style>.d3l_1r_ju {
  d: path("M3 6.5h18L17.75 12L21 17.5H3L6.25 12Z");
}

.g_i53xxev {
  d: path("m12 8.75l.75 2.25l2.5.25l-1.75 1.5L14 15l-2-1.25L10 15l.5-2.25l-1.75-1.5l2.5-.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d3l_1r_ju"/><path class="g_i53xxev"/></g>`,
		"fallback": "uix-sharp:banner-celebrate",
	});
}

export default Component;

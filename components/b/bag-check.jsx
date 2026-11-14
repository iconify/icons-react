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
		"content": `<style>.gozt37bzd {
  d: path("M4.5 8.5h15a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm4 0V6A1.5 1.5 0 0 1 10 4.5h4A1.5 1.5 0 0 1 15.5 6v2.5m-9 0v11m11-11v11");
}

.gviqvacmc {
  d: path("m9.5 14.25l2 2l3-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gozt37bzd"/><path class="gviqvacmc"/></g>`,
		"fallback": "uix-sharp:bag-check",
	});
}

export default Component;

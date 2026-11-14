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

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}

.wm_0e3b_k {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4M8 7h2.75M8 11h6.25M8 16.75c1.25-3 2.75-2.75 2.5-.5c-.25 1 1.75-2.25 2.75-.75c.5.75 1.5.5 2.75-.25M8 19h8");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="wm_0e3b_k"/></g>`,
		"fallback": "uix-sharp:influencer-contract",
	});
}

export default Component;

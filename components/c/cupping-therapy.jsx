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
		"content": `<style>.frg-qb6ci {
  d: path("M2.5 13.5V9.75a2.25 2.25 0 0 1 4.5 0v3.75Zm7.25-.75V9a2.25 2.25 0 0 1 4.5 0v3.75Zm7.25.75V9.75a2.25 2.25 0 0 1 4.5 0v3.75Z");
}

.jk_r7wb7a {
  d: path("M2.5 18.5q9.5-6 19 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="frg-qb6ci"/><path class="jk_r7wb7a"/></g>`,
		"fallback": "uix-sharp:cupping-therapy",
	});
}

export default Component;

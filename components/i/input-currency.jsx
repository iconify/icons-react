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
		"content": `<style>.em4j34a7u {
  d: path("M2.5 6h19v12h-19Z");
}

.erlu5ib7g {
  d: path("M9.25 10.25c-.45-.5-1-.75-1.75-.75c-1 0-1.75.5-1.75 1.25c0 1.65 3.75.85 3.75 2.5c0 .75-.9 1.25-2 1.25c-.9 0-1.5-.25-2-.75m2-5.25v1m0 5v1M13 12h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="em4j34a7u"/><path class="erlu5ib7g"/></g>`,
		"fallback": "uix-sharp:input-currency",
	});
}

export default Component;

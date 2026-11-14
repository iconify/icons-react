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
		"content": `<style>.l70vejfjr {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-9 2.5A1.5 1.5 0 0 0 9 12.5v.75a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5V17a1.5 1.5 0 0 0 1.5 1.5m3-6h2.75M13.5 17h2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwivq1yig {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5Z");
}
</style><g class="ulnmmdpxh"><path class="uwivq1yig"/><path class="l70vejfjr"/></g>`,
		"fallback": "uix-sharp:css-style",
	});
}

export default Component;

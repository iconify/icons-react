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
		"content": `<style>.en1nbdc_p {
  d: path("m3 10l4.5-3.5L12 10l4.5-3.5L21 10M3 16l4.5-3.5L12 16l4.5-3.5L21 16");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="en1nbdc_p"/></g>`,
		"fallback": "uix-sharp:chevron-floor",
	});
}

export default Component;

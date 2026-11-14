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
		"content": `<style>.o4cma47ad {
  d: path("M5.25 2.25v3h3M6.5 7.5h11v9h-11Zm3 3h5m-5 3h3");
}

.t6giiwb8s {
  d: path("M2.5 12a9.5 9.5 0 1 0 2.75-6.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t6giiwb8s"/><path class="o4cma47ad"/></g>`,
		"fallback": "uix-sharp:contact-history",
	});
}

export default Component;

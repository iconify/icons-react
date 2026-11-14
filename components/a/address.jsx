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
		"content": `<style>.h2cxmw-1a {
  d: path("M13.544 20.5H3.5v-10L12 3.25l8.5 7.25v.956");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vjvy5_bxq {
  d: path("M18 21.75c-1.5-1.75-3-3.25-3-5a3 3 0 0 1 6 0c0 1.75-1.5 3.25-3 5Z");
}
</style><g class="ulnmmdpxh"><path class="h2cxmw-1a"/><path class="vjvy5_bxq"/></g>`,
		"fallback": "uix-sharp:address",
	});
}

export default Component;

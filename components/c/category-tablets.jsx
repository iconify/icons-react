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
		"content": `<style>.amc_0255t {
  d: path("M4.5 7.5h11v9h-11ZM19 12h.01");
}

.dtq-hy7hv {
  d: path("M2 5h20v14H2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dtq-hy7hv"/><path class="amc_0255t"/></g>`,
		"fallback": "uix-sharp:category-tablets",
	});
}

export default Component;

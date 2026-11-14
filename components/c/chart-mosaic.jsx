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
		"content": `<style>.o9rynodjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5H11v19H2.5Zm11 0h8V12h-8Zm0 12h2.75v7H13.5Zm5.25 0h2.75v7h-2.75Z");
}
</style><path class="o9rynodjd"/>`,
		"fallback": "uix-sharp:chart-mosaic",
	});
}

export default Component;

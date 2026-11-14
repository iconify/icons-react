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
		"content": `<style>.x-glrxbmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19V7h-19ZM12 9v4.5m-2.25-2.25L12 13.5l2.25-2.25M2.5 16h4.75v5.5H2.5Zm7.25 0h4.5v5.5h-4.5Zm7 0h4.75v5.5h-4.75Z");
}
</style><path class="x-glrxbmi"/>`,
		"fallback": "uix-sharp:chart-drill-down",
	});
}

export default Component;

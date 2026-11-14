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
		"content": `<style>.qm4q9lbgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 3h9.5v18h-9.5ZM10 7.5h4M10 11h4m-4 3.5h2.5m-8-5l-2 2.5l2 2.5m15-5l2 2.5l-2 2.5");
}
</style><path class="qm4q9lbgx"/>`,
		"fallback": "uix-sharp:api-pagination",
	});
}

export default Component;

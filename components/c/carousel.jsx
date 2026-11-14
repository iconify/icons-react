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
		"content": `<style>.cn122qbap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3.5h10v12H7Zm-4.5 2h1.75v8H2.5m19-8h-1.75v8h1.75M9 19.5h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="cn122qbap"/>`,
		"fallback": "uix-sharp:carousel",
	});
}

export default Component;

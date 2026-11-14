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
		"content": `<style>.lpk437bju {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h10m-5 0v3m0 0C15.5 8 16.5 10 16.5 12a4.5 4.5 0 0 1-9 0c0-2 1-4 4.5-6.5Zm0 11v5m-5 0h10");
}
</style><path class="lpk437bju"/>`,
		"fallback": "uix-sharp:double-end-bag",
	});
}

export default Component;

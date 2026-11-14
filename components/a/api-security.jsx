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
		"content": `<style>.nqzw9qjod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3.5c-2 0-2 1-2 3v3c0 1.5-1 2.5-2 2.5c1 0 2 1 2 2.5v3c0 2 0 3 2 3m11-17c2 0 2 1 2 3v3c0 1.5 1 2.5 2 2.5c-1 0-2 1-2 2.5v3c0 2 0 3-2 3m-9-9.5h7v6h-7Zm1.5 0V9a2 2 0 0 1 4 0v2");
}
</style><path class="nqzw9qjod"/>`,
		"fallback": "uix-sharp:api-security",
	});
}

export default Component;

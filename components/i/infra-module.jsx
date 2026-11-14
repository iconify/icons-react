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
		"content": `<style>.gzvmq4bra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5h8v9h-8Zm11 0h8v9h-8Zm-3 6h3M5 10.25h3m8 0h3");
}
</style><path class="gzvmq4bra"/>`,
		"fallback": "uix-sharp:infra-module",
	});
}

export default Component;

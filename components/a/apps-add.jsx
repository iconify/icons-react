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
		"content": `<style>.vm2aivboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h7v7h-7Zm0 10h7v7h-7Zm10 0h7v7h-7Zm3.5-10v7M13.5 7h7");
}
</style><path class="vm2aivboq"/>`,
		"fallback": "uix-sharp:apps-add",
	});
}

export default Component;

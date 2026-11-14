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
		"content": `<style>.qtn6h1tnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 19.5V5A2.5 2.5 0 0 1 7 2.5h12.5V17H7a2.5 2.5 0 0 0-2.5 2.5Zm0 0a2 2 0 0 0 2 2h13M9 9.75h.01m2.99 0h.01m2.99 0h.01");
}
</style><path class="qtn6h1tnw"/>`,
		"fallback": "uix-sharp:dictionary-attack",
	});
}

export default Component;

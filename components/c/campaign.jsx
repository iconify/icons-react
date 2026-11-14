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
		"content": `<style>.qz7khe75n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 9h4.5l8-4.5v15l-8-4.5H3Zm4.5 6l1.25 5M18.5 9.5L21 8m-2.5 6.5L21 16");
}
</style><path class="qz7khe75n"/>`,
		"fallback": "uix-sharp:campaign",
	});
}

export default Component;

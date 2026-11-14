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
		"content": `<style>.o1z8cobcm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h5v7h-5Zm7 0h5v7h-5Zm7 0h5v7h-5ZM5 10V5.5h14V10m-7-4.5V10");
}
</style><path class="o1z8cobcm"/>`,
		"fallback": "uix-sharp:flat-organization",
	});
}

export default Component;

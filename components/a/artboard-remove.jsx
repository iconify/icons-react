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
		"content": `<style>.ff6_qeb-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.1 18H2.5V6.5h16v7.1m-16-9.85h6m7 11.75l5 5m0-5l-5 5");
}
</style><path class="ff6_qeb-x"/>`,
		"fallback": "uix-sharp:artboard-remove",
	});
}

export default Component;

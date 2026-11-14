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
		"content": `<style>.gjvdvzb0u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18H13v3.5H2.5ZM13 19.75c4 0 5-4.75 5-11.75m0-5.25L21.25 8h-6.5Z");
}
</style><path class="gjvdvzb0u"/>`,
		"fallback": "uix-sharp:departure-route",
	});
}

export default Component;

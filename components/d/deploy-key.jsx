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
		"content": `<style>.dwsi7li5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm7-3L20 4m-2 2l1.75 1.75m-4.25.75l1.75 1.75M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><path class="dwsi7li5g"/>`,
		"fallback": "uix-sharp:deploy-key",
	});
}

export default Component;

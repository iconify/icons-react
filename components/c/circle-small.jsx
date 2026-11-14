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
		"content": `<style>.m6uvp_h0u {
  fill: currentColor;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Z");
}
</style><path class="m6uvp_h0u"/>`,
		"fallback": "uix-sharp:circle-small",
	});
}

export default Component;

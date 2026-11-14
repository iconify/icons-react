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
		"content": `<style>.d4pho6w8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 14a4 4 0 0 1 0-8a6 6 0 0 1 11 0a4 4 0 0 1 0 8Zm0 2.75l-1 3.75m4.25-3.75l-1 3.75M13 16.75l-1 3.75m3 .25h4a1.75 1.75 0 0 0 0-3.5");
}
</style><path class="d4pho6w8c"/>`,
		"fallback": "uix-sharp:cloud-rain-wind",
	});
}

export default Component;

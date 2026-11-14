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
		"content": `<style>.lnidhlbcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8h6a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm11 0h6a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1ZM4 3h5v5H4Zm11 0h5v5h-5Zm-4.5 9h3");
}
</style><path class="lnidhlbcp"/>`,
		"fallback": "uix-sharp:binoculars-marine",
	});
}

export default Component;

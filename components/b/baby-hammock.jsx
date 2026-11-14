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
		"content": `<style>.npbn_9bat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5v18m18-18v18m-15-11c3 8 9 8 12 0c-3 3-9 3-12 0Zm-3-5l3 5m15-5l-3 5");
}
</style><path class="npbn_9bat"/>`,
		"fallback": "uix-sharp:baby-hammock",
	});
}

export default Component;

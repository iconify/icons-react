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
		"content": `<style>.ffjrddued {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 21V3M4.75 6.25L8 3l3.25 3.25M8 13l11-8m-4.25-.75L19 5l-.75 4.25");
}
</style><path class="ffjrddued"/>`,
		"fallback": "uix-sharp:arrow-split-right",
	});
}

export default Component;

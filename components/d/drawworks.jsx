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
		"content": `<style>.otxjj3p-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 13.5a1.75 6.5 0 1 0 3.5 0a1.75 6.5 0 1 0-3.5 0Zm11 0a1.75 6.5 0 1 0 3.5 0a1.75 6.5 0 1 0-3.5 0ZM6.5 10h8m-8 7h8m-4-14.5V10m7.25 3.5h2.75v4");
}
</style><path class="otxjj3p-t"/>`,
		"fallback": "uix-sharp:drawworks",
	});
}

export default Component;

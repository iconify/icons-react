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
		"content": `<style>.op9373bwi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5H13V13H4.5ZM7.25 2v2.5m3-2.5v2.5m-3 8.5v2.5m3-2.5v2.5M2 7.25h2.5m-2.5 3h2.5m8.5-3h2.5m-2.5 3h2.5m-1.5 7.5a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}
</style><path class="op9373bwi"/>`,
		"fallback": "uix-sharp:bios-chip",
	});
}

export default Component;

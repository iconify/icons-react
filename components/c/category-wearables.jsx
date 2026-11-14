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
		"content": `<style>.mwb6bzb8j {
  d: path("M8.25 12H10l1.25-3.5l1.75 7l1.25-3.5h1.5");
}

.sti-iib0b {
  d: path("M6.5 4.5h11a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1Zm2 0v-2h7v2m-7 15v2h7v-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="sti-iib0b"/><path class="mwb6bzb8j"/></g>`,
		"fallback": "uix-sharp:category-wearables",
	});
}

export default Component;

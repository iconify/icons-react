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
		"content": `<style>.c9h8a6bwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 7.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0ZM5 15.25a2.5 2.5 0 0 0-2.5 2.5v1.75H8C8 16 9.75 14 12 14s4 2 4 5.5h5.5v-1.75a2.5 2.5 0 0 0-2.5-2.5M8 19.5h8m-13.5-9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="c9h8a6bwz"/>`,
		"fallback": "uix-sharp:business-meeting",
	});
}

export default Component;

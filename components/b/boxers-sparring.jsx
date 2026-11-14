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
		"content": `<style>.w780ruwiy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 9.75H11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm-4 2h3v6h-3Zm10.5-2h4.5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm5.5 2h3v6h-3ZM12 4v3M8.5 4.5L9.75 7m5.75-2.5L14.25 7");
}
</style><path class="w780ruwiy"/>`,
		"fallback": "uix-sharp:boxers-sparring",
	});
}

export default Component;

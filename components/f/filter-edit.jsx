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
		"content": `<style>.s9bf3xb0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4H18l-5.5 7v6L9 19v-8ZM15 21l.5-2.25l4.5-4.5L21.75 16l-4.5 4.5Z");
}
</style><path class="s9bf3xb0g"/>`,
		"fallback": "uix-sharp:filter-edit",
	});
}

export default Component;

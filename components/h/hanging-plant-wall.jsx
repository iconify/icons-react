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
		"content": `<style>.xnfsw368v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5V10m0-6h11M3 8.5L7.5 4M14 4v10m-5.5 0h11L18 20.5h-8Zm2.25 0c-2.75-1-3.5-3.25-3-5c2.5.5 3.5 2.5 3 5Zm6.5 0c2.75-1 3.5-3.25 3-5c-2.5.5-3.5 2.5-3 5Z");
}
</style><path class="xnfsw368v"/>`,
		"fallback": "uix-sharp:hanging-plant-wall",
	});
}

export default Component;

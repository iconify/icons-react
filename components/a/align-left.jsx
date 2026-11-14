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
		"content": `<style>.bl62mpazr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4.5h13.5V10H6ZM6 14h8.5v5.5H6ZM3 2.5v19");
}
</style><path class="bl62mpazr"/>`,
		"fallback": "uix-sharp:align-left",
	});
}

export default Component;

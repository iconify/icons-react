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
		"content": `<style>.pqvle8mbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7H13v3a4.25 4.25 0 0 1-8.5 0Zm2-4v4M11 3v4m-2.25 7.25v7.25m6.25-4h6v3.75h-6Zm1.5 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><path class="pqvle8mbz"/>`,
		"fallback": "uix-sharp:charger-cable-locked",
	});
}

export default Component;

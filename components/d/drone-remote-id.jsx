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
		"content": `<style>.dkcqu2x6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 13.5h3v3h-3Zm-1.75-1.75l1.75 1.75m4.75-1.75L13.5 13.5m-4.75 4.75l1.75-1.75m4.75 1.75L13.5 16.5m-8.25-6.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-9.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10.25 6.5a4 4 0 0 1 3.5 0M9 3.75a7 7 0 0 1 6 0");
}
</style><path class="dkcqu2x6p"/>`,
		"fallback": "uix-sharp:drone-remote-id",
	});
}

export default Component;

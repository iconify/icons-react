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
		"content": `<style>.dmseh2b3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 9v-2.25a2 2 0 0 1 4 0v2.25M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 16.5v-9.75a2 2 0 0 1 4 0v9.75m3.5-9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 9v-2.25a2 2 0 0 1 4 0v2.25");
}
</style><path class="dmseh2b3p"/>`,
		"fallback": "uix-sharp:crowd-wave",
	});
}

export default Component;

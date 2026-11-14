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
		"content": `<style>.vyxtg4bjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5a2 2 0 0 1 2-2h4c1.5 0 2 2 3 4.5s7 4 7 8.5v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm0 12.5h16m-12 0V21m4-3.5V21m4-3.5V21");
}
</style><path class="vyxtg4bjc"/>`,
		"fallback": "uix-sharp:grand-piano",
	});
}

export default Component;

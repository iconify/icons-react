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
		"content": `<style>.gthgi4uth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h2m0 0A2.25 3 0 0 1 9 14a2.25 3 0 0 1 4.5 0a2.25 3 0 0 1 4.5 0a2.25 3 0 0 1 4 0");
}
</style><path class="gthgi4uth"/>`,
		"fallback": "uix-sharp:inductor",
	});
}

export default Component;

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
		"content": `<style>.zro23mbab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5v-2a2 2 0 0 1 2-2h2m3.5 0h4m3.5 0h2a2 2 0 0 1 2 2v2m0 3.5v4m0 3.5v2a2 2 0 0 1-2 2h-2m-3.5 0h-4m-3.5 0h-2a2 2 0 0 1-2-2v-2m0-3.5v-4m7 0h.01m4.99 0h.01M9 16.5c1.25-2.5 4.75-2.5 6 0");
}
</style><path class="zro23mbab"/>`,
		"fallback": "uix-sharp:empty-state",
	});
}

export default Component;

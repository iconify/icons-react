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
		"content": `<style>.ixxihvndh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v6a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2ZM6 13c0-5.5 12-5.5 12 0M9.5 3L12 5.5L14.5 3");
}
</style><path class="ixxihvndh"/>`,
		"fallback": "uix-sharp:emergency-stop-pressed",
	});
}

export default Component;

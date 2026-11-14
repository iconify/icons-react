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
		"content": `<style>.kz4t5cckt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 2.5L5 13.25h6.5l-3 8.25L19 10.25h-6.25Z");
}
</style><path class="kz4t5cckt"/>`,
		"fallback": "uix-sharp:genre-electronic",
	});
}

export default Component;

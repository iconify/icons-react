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
		"content": `<style>.k0f92cuau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 3l8 4l-8 4l-8-4Zm-8 8l8 4l2.196-1.098m3.131-1.565L19 11M3 15l8 4l2.5-1.25m2-2.25l5 5m0-5l-5 5");
}
</style><path class="k0f92cuau"/>`,
		"fallback": "uix-sharp:cache-clear",
	});
}

export default Component;

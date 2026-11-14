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
		"content": `<style>.mojhj04qt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4h3.5v16H7Zm6.25 3h3v10h-3ZM2.5 12H7m3.5 0h2.75m3 0h5.25");
}
</style><path class="mojhj04qt"/>`,
		"fallback": "uix-sharp:change-plates",
	});
}

export default Component;

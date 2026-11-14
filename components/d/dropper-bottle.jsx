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
		"content": `<style>.u9o9g2b4t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 7.5V5.25a2 2 0 0 1 4 0V7.5m-5 0h6v3H5Zm-2.5 3h11v11h-11Zm16.5 3c.75 1 2.5 3 2.5 4.5a2.5 2.5 0 0 1-5 0c0-1.5 1.75-3.5 2.5-4.5Z");
}
</style><path class="u9o9g2b4t"/>`,
		"fallback": "uix-sharp:dropper-bottle",
	});
}

export default Component;

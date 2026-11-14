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
		"content": `<style>.bnjnom5xi {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-npt07md {
  d: path("M5 14c-2-3 0-8 5-8.5c4-.5 8.5 1.5 10 5S18 19 13 19c-4 0-6.5-1.5-8-5Z");
}
</style><g class="ulnmmdpxh"><path class="x-npt07md"/><path class="bnjnom5xi"/></g>`,
		"fallback": "uix-sharp:fried-egg",
	});
}

export default Component;

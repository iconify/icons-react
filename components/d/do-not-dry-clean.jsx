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
		"content": `<style>.gzcl0ibnz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0ZM4 4l16 16m0-16L4 20");
}
</style><path class="gzcl0ibnz"/>`,
		"fallback": "uix-sharp:do-not-dry-clean",
	});
}

export default Component;

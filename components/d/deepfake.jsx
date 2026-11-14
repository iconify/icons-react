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
		"content": `<style>.lfh7mdbby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2M6 9.5c2-.75 4-.5 6 1c2-1.5 4-1.75 6-1c0 3.5-1.25 5.5-3 5.5c-1.25 0-2-.9-3-2c-1 1.1-1.75 2-3 2c-1.75 0-3-2-3-5.5Z");
}
</style><path class="lfh7mdbby"/>`,
		"fallback": "uix-sharp:deepfake",
	});
}

export default Component;

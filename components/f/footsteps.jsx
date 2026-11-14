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
		"content": `<style>.c0-o5vbxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 12a3 4 0 1 0 6 0a3 4 0 1 0-6 0Zm1 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0Zm8-13.75a3 4 0 1 0 6 0a3 4 0 1 0-6 0Zm1 8.25a2 1.25 0 1 0 4 0a2 1.25 0 1 0-4 0Z");
}
</style><path class="c0-o5vbxj"/>`,
		"fallback": "uix-sharp:footsteps",
	});
}

export default Component;

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
		"content": `<style>.jgvh_rz4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 17.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm7-7a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-4.25-5.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="jgvh_rz4b"/>`,
		"fallback": "uix-sharp:carbonated",
	});
}

export default Component;

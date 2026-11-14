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
		"content": `<style>.tw0v1cccu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 13V4.75a1.75 1.75 0 0 1 3.5 0v5.75H17a2.5 2.5 0 0 1 2.5 2.5v2.5c0 3.5-2.75 6-6.5 6h-1c-4 0-7-2.5-7-6v-1A1.5 1.5 0 0 1 6.5 13Zm6.75-2.5v3");
}
</style><path class="tw0v1cccu"/>`,
		"fallback": "uix-sharp:hand-count-one",
	});
}

export default Component;

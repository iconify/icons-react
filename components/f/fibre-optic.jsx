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
		"content": `<style>.mdbl94b4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 15.5h7v5h-7Zm1 0c0-4.5-4-6-4-9m6.5 9v-9m2.5 9c0-4.5 4-6 4-9m-13-3h.01m6.49 0h.01m6.49 0h.01");
}
</style><path class="mdbl94b4o"/>`,
		"fallback": "uix-sharp:fibre-optic",
	});
}

export default Component;

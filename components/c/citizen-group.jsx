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
		"content": `<style>.wh6m-vbam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM7 20c0-4 2.25-6 5-6s5 2 5 6M2.5 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0 8.5c0-2.5.75-3.5 2-3.75m13-4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 8.5c0-2.5-.75-3.5-2-3.75");
}
</style><path class="wh6m-vbam"/>`,
		"fallback": "uix-sharp:citizen-group",
	});
}

export default Component;

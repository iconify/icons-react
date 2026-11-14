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
		"content": `<style>.irojx6boc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8a6 5 0 0 1 12 0M4 8h16l-2.5 4.5h-11Zm6 4.5v6m4-6v6m-7 0h10V21H7Z");
}
</style><path class="irojx6boc"/>`,
		"fallback": "uix-sharp:baptismal-font",
	});
}

export default Component;

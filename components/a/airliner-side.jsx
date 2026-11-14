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
		"content": `<style>.bmqu140qg {
  d: path("M13.75 15.5h4v2.25h-4Z");
}

.g9jph5b5v {
  d: path("M5 15.5h13c2 0 3.5-.75 3.5-2s-1.5-2-3.5-2H9.5L6.5 6h-2l-1 7c0 1.75.5 2.5 1.5 2.5Zm5.5 0H14l-4 4H7.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g9jph5b5v"/><path class="bmqu140qg"/></g>`,
		"fallback": "uix-sharp:airliner-side",
	});
}

export default Component;

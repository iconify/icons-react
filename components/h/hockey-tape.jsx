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
		"content": `<style>.edd76-bwv {
  d: path("M9 10.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-4.5 0V21");
}

.fwdxjebns {
  d: path("M4.5 10.5a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fwdxjebns"/><path class="edd76-bwv"/></g>`,
		"fallback": "uix-sharp:hockey-tape",
	});
}

export default Component;

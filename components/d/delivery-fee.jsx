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
		"content": `<style>.dkyuo1bcw {
  d: path("M10 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm-6 7.5h16m-6-9.25v3");
}

.o8-1rtl0d {
  d: path("M4 11h16v10.5H4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o8-1rtl0d"/><path class="dkyuo1bcw"/></g>`,
		"fallback": "uix-sharp:delivery-fee",
	});
}

export default Component;

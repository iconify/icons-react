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
		"content": `<style>.fe645xucn {
  d: path("M5 14.75h1.75V17H5Zm4.75 0h1V17h-1Zm3.5 0H15v.75h-1.75Zm0 1.75H15v.5h-1.75Zm4.25-1.75H19V17h-1.5Z");
}

.mfrk4zwvc {
  d: path("M2.5 4.5h19v15h-19Zm3 4H12m-6.5 3h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mfrk4zwvc"/><path class="fe645xucn"/></g>`,
		"fallback": "uix-sharp:cheque-micr",
	});
}

export default Component;

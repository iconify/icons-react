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
		"content": `<style>.g5k3bk1ge {
  d: path("M14 2.5v5h5m-11 4h8M8 15h8m-8 3.5h4.5");
}

.s7z1mzabd {
  d: path("M5 2.5h9l5 5v14H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s7z1mzabd"/><path class="g5k3bk1ge"/></g>`,
		"fallback": "uix-sharp:abstract-doc",
	});
}

export default Component;

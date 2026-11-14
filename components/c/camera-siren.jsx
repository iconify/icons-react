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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vcr3fcf2v {
  d: path("M9.75 15.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM4 5l2 2m14-2l-2 2");
}

.y8lwphb3c {
  d: path("M3 12a2 2 0 0 1 2-2h3.5V8.5a3.5 3.5 0 0 1 7 0V10H19a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="ulnmmdpxh"><path class="y8lwphb3c"/><path class="vcr3fcf2v"/></g>`,
		"fallback": "uix-sharp:camera-siren",
	});
}

export default Component;

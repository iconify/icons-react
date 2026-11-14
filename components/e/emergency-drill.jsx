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
		"content": `<style>.f7x-s8b_e {
  d: path("M9.5 9.5H21v4h-6.25a5.5 5.5 0 1 1-5.25-4Zm-7-4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm3.25 2L7 10");
}

.ukr0u_nrh {
  d: path("M7.75 15a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f7x-s8b_e"/><path class="ukr0u_nrh"/></g>`,
		"fallback": "uix-sharp:emergency-drill",
	});
}

export default Component;

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
		"content": `<style>.i0kbvhdzp {
  d: path("M2.5 2.5h19v19h-19Zm6 4.5h13");
}

.nlyr-3b5a {
  d: path("M2.5 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-3 5h13m0 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-16 5h3m6 0h10m-16 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i0kbvhdzp"/><path class="nlyr-3b5a"/></g>`,
		"fallback": "uix-sharp:abacus",
	});
}

export default Component;

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
		"content": `<style>.iz-7ubf7i {
  d: path("M9.5 9h5a2.5 2.5 0 0 1 2.5 2.5V18a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 18v-6.5A2.5 2.5 0 0 1 9.5 9Z");
}

.n45jvwdmi {
  d: path("M7.5 10.5c-2.5 0-4-2-4-4.5m13 4.5c2.5 0 4-2 4-4.5M10 13.5h.01m3.99 0h.01M9 17.5a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iz-7ubf7i"/><path class="n45jvwdmi"/></g>`,
		"fallback": "uix-sharp:business-livestock-cover",
	});
}

export default Component;

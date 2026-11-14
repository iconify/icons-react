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
		"content": `<style>.okohc-b1j {
  d: path("M4 10.5v3a8 8 0 0 0 16 0v-3");
}

.snmrlcodl {
  d: path("M15.25 3.25a8 8 0 1 0 4.25 4.5a3.5 3.5 0 0 1-4.25-4.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="snmrlcodl"/><path class="okohc-b1j"/></g>`,
		"fallback": "uix-sharp:chewable-tablet",
	});
}

export default Component;

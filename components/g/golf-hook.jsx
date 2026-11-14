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

.vtrq3hbho {
  d: path("M9 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3.5-5.75C14.5 9.5 16 5.5 8 5");
}

.w118l0p0e {
  d: path("M10 3L7.5 5L10 7");
}
</style><g class="ulnmmdpxh"><path class="vtrq3hbho"/><path class="w118l0p0e"/></g>`,
		"fallback": "uix-sharp:golf-hook",
	});
}

export default Component;

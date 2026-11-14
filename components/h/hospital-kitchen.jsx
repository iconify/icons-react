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
		"content": `<style>.n0q0gac6b {
  fill: currentColor;
  d: path("M16.5 14.25h3v2.25h2.25v3H19.5v2.25h-3V19.5h-2.25v-3h2.25Z");
}

.pcluihb_k {
  d: path("M4 8v6.5c0 1.7 1.3 3 3 3h4.49m4.01-6.08V8m-13 0H17M5 8c0-2.5 2-3.5 4.75-3.5s4.75 1 4.75 3.5M9.75 4.5V2.75m-7.25 8H4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pcluihb_k"/><path class="n0q0gac6b"/></g>`,
		"fallback": "uix-sharp:hospital-kitchen",
	});
}

export default Component;

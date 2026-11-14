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
		"content": `<style>.q5q4_bbdl {
  d: path("m4 10.5l8-7l8 7V20H4Z");
}

.sbc28bbuk {
  d: path("M10.5 11.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM9 18c.25-1.5 1.5-2.5 3-2.5s2.75 1 3 2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q5q4_bbdl"/><path class="sbc28bbuk"/></g>`,
		"fallback": "uix-sharp:home-user",
	});
}

export default Component;

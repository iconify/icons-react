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

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3g-tbcaj {
  d: path("M9.5 13.5h5v4h-5Zm1 0v-1a1.5 1.5 0 0 1 3 0v1");
}
</style><g class="ulnmmdpxh"><path class="q5q4_bbdl"/><path class="z3g-tbcaj"/></g>`,
		"fallback": "uix-sharp:home-lock",
	});
}

export default Component;

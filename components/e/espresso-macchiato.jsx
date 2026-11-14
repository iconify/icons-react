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
		"content": `<style>.f-or10kgf {
  d: path("M16.5 11h1a2.5 2.5 0 0 1 0 5h-2m-8-6a3 3 0 0 1 3.25-3.5A2.75 2.75 0 0 1 13.5 10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8jtigbxp {
  d: path("M5 10h11.5v4a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5Z");
}
</style><g class="ulnmmdpxh"><path class="x8jtigbxp"/><path class="f-or10kgf"/></g>`,
		"fallback": "uix-sharp:espresso-macchiato",
	});
}

export default Component;

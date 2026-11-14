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
		"content": `<style>.e_p0be2-x {
  d: path("M7 20.5h9c1.5-3.5 1-7-1.5-10C13 8.75 13.5 6 16 4c-6.5.5-11.5 7-9 16.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z9ra4rcwi {
  d: path("M10 18c-.5-4 .5-7.5 3-10");
}
</style><g class="ulnmmdpxh"><path class="e_p0be2-x"/><path class="z9ra4rcwi"/></g>`,
		"fallback": "uix-sharp:bulb-garlic-clove",
	});
}

export default Component;

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
		"content": `<style>.jop5rxn0q {
  d: path("M7.25 21.5V18C5 16.25 4 14 4 11.5c0-3.75 3-6.75 6.75-6.75c3.5 0 6.25 2.5 6.25 6.25l1.5 3c.25.5-.25 1-.75 1H17v2c0 1-.75 1.75-1.75 1.75H13.5v2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vkgh2bb5d {
  d: path("M17 13.75c-2 0-4.5-.25-6.25-1.5c-1.5-1-2.25-2.25-2.25-4m3 2.75l1.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="jop5rxn0q"/><path class="vkgh2bb5d"/></g>`,
		"fallback": "uix-sharp:feeding-tube",
	});
}

export default Component;

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
		"content": `<style>.eoeoqudwa {
  d: path("M21 5h-2.5c-4 0-4.5 7-8.5 7H3.5M21 19h-2.5c-4 0-4.5-7-8.5-7");
}

.h15vce0kf {
  d: path("M7 8.5L3.5 12L7 15.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoeoqudwa"/><path class="h15vce0kf"/></g>`,
		"fallback": "uix-sharp:arrow-merge-left",
	});
}

export default Component;

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
		"content": `<style>.uaf9exbnn {
  d: path("M4.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2_ztq3rg {
  d: path("M10 6.75L9 4h6l-1 2.75");
}
</style><g class="ulnmmdpxh"><path class="uaf9exbnn"/><path class="x2_ztq3rg"/></g>`,
		"fallback": "uix-sharp:chalk-ball",
	});
}

export default Component;

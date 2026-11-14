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
		"content": `<style>.imp77ccbv {
  d: path("M6 9.5c-2.5-2.5-2.5-7 .25-7C8.75 2.5 9 5.5 7.5 8M18 9.5c2.5-2.5 2.5-7-.25-7c-2.5 0-2.75 3-1.25 5.5M7 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.uaf9exbnn {
  d: path("M4.5 14a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uaf9exbnn"/><path class="imp77ccbv"/></g>`,
		"fallback": "uix-sharp:bush-baby",
	});
}

export default Component;

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
		"content": `<style>.ecu3uoboo {
  d: path("M4.5 18a8.75 8.75 0 1 1 15 0");
}

.syqkmbc0b {
  d: path("M5 15.5L4.5 18L2 17.5m6.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4 0V11m0 0l3 1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ecu3uoboo"/><path class="syqkmbc0b"/></g>`,
		"fallback": "uix-sharp:encore",
	});
}

export default Component;

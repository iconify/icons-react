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
		"content": `<style>.ii522ablq {
  d: path("M6 7h12a1 1 0 0 1 1 1v12.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z");
}

.nx2_xubey {
  d: path("M9 21.5v-16a3 3 0 0 1 6 0v16");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ii522ablq"/><path class="nx2_xubey"/></g>`,
		"fallback": "uix-sharp:expedition-duffel",
	});
}

export default Component;

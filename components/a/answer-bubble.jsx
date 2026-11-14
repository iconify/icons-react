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
		"content": `<style>.e54k3pb8t {
  d: path("M10.5 13.5v-1.75Q9 10.625 9 8.75a3 3 0 0 1 6 0q0 1.875-1.5 3v1.75Z");
}

.mtov54nrz {
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5V14a2.5 2.5 0 0 1-2.5 2.5H11l-4 4v-4H5.5A2.5 2.5 0 0 1 3 14Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mtov54nrz"/><path class="e54k3pb8t"/></g>`,
		"fallback": "uix-sharp:answer-bubble",
	});
}

export default Component;

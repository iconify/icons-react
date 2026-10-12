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
		"content": `<style>.ep4yrs5sy {
  d: path("M4.25 4.25h15.5v11H4.25zM2.75 19h18.5");
}

.i9rul54th {
  d: path("m12.45 6.46l3.35 1.58l.45.21l-.45.21l-3.35 1.58l-.45.21l-.45-.21L8.2 8.46l-.45-.21l.45-.21l3.35-1.58l.45-.21zm-2.7 4.04V12L12 13.5l2.25-1.5v-1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ep4yrs5sy"/><path class="i9rul54th"/></g>`,
		"fallback": "iconoven:course-sharp",
	});
}

export default Component;

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
		"content": `<style>.rmn0_9bsr {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y2csv3b-p {
  d: path("M10.5 6.25a3.5 7.25 0 0 0 0 14.5M3.53 11.5q6.97 3.5 13.94 0M19 2.75l.27 1.98l1.98.27l-1.98.27L19 7.25l-.27-1.98L16.75 5l1.98-.27z");
}
</style><g class="x2cwu0gfd"><circle class="rmn0_9bsr"/><path class="y2csv3b-p"/></g>`,
		"fallback": "iconoven:earth-globe-space-sharp",
	});
}

export default Component;

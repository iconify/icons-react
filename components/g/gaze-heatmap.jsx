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
		"content": `<style>.nxfjow9cn {
  d: path("M7.75 12a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM12 12h.01");
}

.qb6_968us {
  d: path("M2.5 12C5 7 8.5 5 12 5s7 2 9.5 7c-2.5 5-6 7-9.5 7s-7-2-9.5-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qb6_968us"/><path class="nxfjow9cn"/></g>`,
		"fallback": "uix-sharp:gaze-heatmap",
	});
}

export default Component;

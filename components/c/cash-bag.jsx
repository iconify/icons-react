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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pbev55b8i {
  d: path("M9 7c0-2-1-3-1.5-4h9C16 4 15 5 15 7M9 7c-4 2-5 6-5 9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4c0-3-1-7-5-9Zm.5 0h5");
}

.vtk3i1brc {
  d: path("M13.75 10.25C13.5 9.5 12.9 9 12 9c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M12 7.75V9m0 6v1.25");
}
</style><g class="hntgybcog"><path class="pbev55b8i"/><path class="vtk3i1brc"/></g>`,
		"fallback": "uix:cash-bag",
	});
}

export default Component;

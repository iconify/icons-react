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
		"content": `<style>.hje5i24pu {
  d: path("M7.43 4.5h9.14a2.625 2.625 0 0 1 2.506 1.842l1.805 5.776a2.6 2.6 0 0 1 .119.783v3.974a2.625 2.625 0 0 1-2.625 2.625H5.625A2.625 2.625 0 0 1 3 16.875v-3.974a2.6 2.6 0 0 1 .119-.783l1.805-5.776A2.625 2.625 0 0 1 7.43 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p2wn83b4s {
  d: path("M3 12.5h5L9.5 15h5l1.5-2.5h5");
}
</style><g class="hntgybcog"><path class="hje5i24pu"/><path class="p2wn83b4s"/></g>`,
		"fallback": "uix:inbox",
	});
}

export default Component;

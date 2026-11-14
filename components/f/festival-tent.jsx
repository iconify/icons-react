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

.m379m8btb {
  d: path("m4.533 17.717l6.054-8.284a1.75 1.75 0 0 1 2.826 0l6.054 8.284a1.75 1.75 0 0 1-1.413 2.783H5.946a1.75 1.75 0 0 1-1.413-2.783M12 2.5v5m1.379-4.409l.371.159a.816.816 0 0 1 0 1.5l-.371.159A.99.99 0 0 1 12 4a.99.99 0 0 1 1.379-.909");
}

.x9cv2hk7p {
  d: path("M8.5 20.5L12 13l3.5 7.5");
}
</style><g class="hntgybcog"><path class="m379m8btb"/><path class="x9cv2hk7p"/></g>`,
		"fallback": "uix:festival-tent",
	});
}

export default Component;

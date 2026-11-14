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
		"content": `<style>.w-mxegbvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 6l3.65-2.028a1.75 1.75 0 0 1 1.7 0L16.5 6a1.334 1.334 0 0 1-.648 2.5H8.148A1.334 1.334 0 0 1 7.5 6m4.5 5.5v9m-3 0h6m-9.5-8h13M3.5 17l2-4.5l2 4.5m-4 0a2 2 0 0 0 4 0Zm13 0l2-4.5l2 4.5m-4 0a2 2 0 0 0 4 0Z");
}
</style><path class="w-mxegbvz"/>`,
		"fallback": "uix:courthouse-civic",
	});
}

export default Component;

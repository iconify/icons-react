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
		"content": `<style>.nhj6pzbna {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5L6 4.25q.25-1 1.5-1h5q1.25 0 1.5 1l1.5 4.25m-4 6h-9v-6h15v4.7m-12 1.3V17M16 16h5.5l-2 2.75v2.75l-1.5-1v-1.75Z");
}
</style><path class="nhj6pzbna"/>`,
		"fallback": "uix-sharp:car-filter",
	});
}

export default Component;

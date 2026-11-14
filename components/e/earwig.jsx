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
		"content": `<style>.e2gvw366s {
  d: path("M12 7za2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 12 17a2.5 2.5 0 0 1-2.5-2.5v-5A2.5 2.5 0 0 1 12 7m-.5 10q-4 2-1 4.5m2-4.5q4 2 1 4.5m-4-9.5h5m-5-2.5L6.5 8m3 6.5l-3 1.5m8-6.5l3-1.5m-3 6.5l3 1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-747lbuo {
  d: path("M10 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="k-747lbuo"/><path class="e2gvw366s"/></g>`,
		"fallback": "uix:earwig",
	});
}

export default Component;

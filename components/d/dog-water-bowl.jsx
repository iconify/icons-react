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

.i8l7frnpo {
  d: path("M6.287 12.5h11.426a1.75 1.75 0 0 1 1.671 1.228l1.406 4.5a1.75 1.75 0 0 1-1.67 2.272H4.88a1.75 1.75 0 0 1-1.67-2.272l1.406-4.5A1.75 1.75 0 0 1 6.287 12.5");
}

.k0rz-db9k {
  d: path("M7 16.5q2.5-1.5 5 0t5 0m-5-14S9.25 5.5 9.25 7a2.75 2.75 0 0 0 5.5 0c0-1.5-2.75-4.5-2.75-4.5");
}
</style><g class="hntgybcog"><path class="i8l7frnpo"/><path class="k0rz-db9k"/></g>`,
		"fallback": "uix:dog-water-bowl",
	});
}

export default Component;

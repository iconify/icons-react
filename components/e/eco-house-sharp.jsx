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
		"content": `<style>.ijd22ib1x {
  d: path("M8.75 18.25c.25-4.02 1.95-5.75 6.5-5.75c-.25 4.02-1.95 5.75-6.5 5.75Z");
}

.x1mbz_b7o {
  d: path("M3.25 19.75v-9l1.14-.98l6.47-5.54L12 3.25l1.14.98l6.47 5.54l1.14.98v10.5H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x1mbz_b7o"/><path class="ijd22ib1x"/></g>`,
		"fallback": "iconoven:eco-house-sharp",
	});
}

export default Component;

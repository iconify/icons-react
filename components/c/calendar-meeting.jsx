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
		"content": `<style>.d3zu-t1og {
  d: path("M11 18.5H2.5v-14H17v5.3M7 2.5v4m5.5-4v4m-10 3H17");
}

.e0jimku-e {
  d: path("M14 14.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM12.75 22c0-2 1.5-3.25 3.25-3.25S19.25 20 19.25 22m.75-9.5a2 2 0 0 1 0 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d3zu-t1og"/><path class="e0jimku-e"/></g>`,
		"fallback": "uix-sharp:calendar-meeting",
	});
}

export default Component;

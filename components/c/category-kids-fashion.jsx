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
		"content": `<style>.pmwyqteom {
  fill: currentColor;
  d: path("m12 9l.735 2.489l2.594-.071l-2.14 1.468l.868 2.446L12 13.75l-2.057 1.582l.868-2.446l-2.14-1.468l2.594.071Z");
}

.tt1ffpbmk {
  d: path("M9 2.5L4.5 4l-2 4.5L5 10l1-1.5v7q0 3.5 3.5 4v2h5v-2q3.5-.5 3.5-4v-7l1 1.5l2.5-1.5l-2-4.5L15 2.5C14 5 10 5 9 2.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tt1ffpbmk"/><path class="pmwyqteom"/></g>`,
		"fallback": "uix-sharp:category-kids-fashion",
	});
}

export default Component;

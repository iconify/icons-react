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
		"content": `<style>.ccxh-djip {
  d: path("M9.75 6.5a2.25 2.75 0 0 0 4.5 0M5.5 14.75h13");
}

.woqcq9rna {
  d: path("M8.07 6.87L4.93 8.13L4 8.5l-.2.98l-.35 1.79l-.2.98l.98.22l.29.06l.98.22v4.5h13v-4.5l.98-.22l.29-.06l.98-.22l-.2-.98l-.35-1.79l-.2-.98l-.93-.37l-3.14-1.26L15 6.5H9z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="woqcq9rna"/><path class="ccxh-djip"/></g>`,
		"fallback": "iconoven:crop-top-sharp",
	});
}

export default Component;

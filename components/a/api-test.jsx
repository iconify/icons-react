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
		"content": `<style>.lfj2l3myg {
  d: path("M10 6.5v4l-3.25 6A1 1 0 0 0 7.5 18h9a1 1 0 0 0 .75-1.5l-3.25-6v-4m-5 0h6");
}

.saz4y0b1r {
  d: path("M3.5 2.5h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="saz4y0b1r"/><path class="lfj2l3myg"/></g>`,
		"fallback": "uix-sharp:api-test",
	});
}

export default Component;

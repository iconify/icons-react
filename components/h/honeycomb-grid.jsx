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
		"content": `<style>.fbyyl5but {
  d: path("m9.5 8l2 1v2.5l-2 1l-2-1V9Z");
}

.i9j8pqose {
  d: path("M2.5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqtrv-brv {
  d: path("m7.5 11.5l2 1V15l-2 1l-2-1v-2.5Zm4 0l2 1V15l-2 1l-2-1v-2.5Zm6.75-4l3.25-2m-3.25 11l3.25 2");
}
</style><g class="ulnmmdpxh"><path class="i9j8pqose"/><path class="fbyyl5but"/><path class="yqtrv-brv"/></g>`,
		"fallback": "uix-sharp:honeycomb-grid",
	});
}

export default Component;

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
		"content": `<style>.cb-52l0ci {
  d: path("M10 2.5h4a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-13a3 3 0 0 1 3-3Z");
}

.tsqwxqb1y {
  d: path("M7 12a5 1.75 0 0 0 10 0M7 12a5 1.75 0 0 1 10 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cb-52l0ci"/><path class="tsqwxqb1y"/></g>`,
		"fallback": "uix-sharp:capsule-3d",
	});
}

export default Component;

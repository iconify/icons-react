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
		"content": `<style>.j8q4w3b5c {
  d: path("m10.75 3.75l.5-1.5h1.5l.5 1.5l1.75.5l1.25-1L17.5 4l-.25 1.5l1.25 1.25L20 6.5l.75 1.25l-1 1.25l.5 1.75l1.5.5v1.5l-1.5.5l-.5 1.75l1 1.25L20 17.5l-1.5-.25l-1.25 1.25l.25 1.5l-1.25.75l-1.25-1l-1.75.5l-.5 1.5h-1.5l-.5-1.5l-1.75-.5l-1.25 1L6.5 20l.25-1.5l-1.25-1.25l-1.5.25l-.75-1.25l1-1.25l-.5-1.75l-1.5-.5v-1.5l1.5-.5l.5-1.75l-1-1.25L4 6.5l1.5.25L6.75 5.5L6.5 4l1.25-.75l1.25 1Z");
}

.lyyhg703l {
  d: path("M6.75 12a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x1o-m7bwh {
  d: path("M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="j8q4w3b5c"/><path class="lyyhg703l"/><path class="x1o-m7bwh"/></g>`,
		"fallback": "uix-sharp:flywheel",
	});
}

export default Component;

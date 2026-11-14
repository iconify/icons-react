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
		"content": `<style>.dpwrr4bif {
  d: path("M6.5 18.5v-13q5.5-3.5 11 0v13m-13 3l2-3h11l2 3Z");
}

.sccd98btk {
  d: path("M9.25 6.75h5.5v9h-5.5ZM12 9.5V13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dpwrr4bif"/><path class="sccd98btk"/></g>`,
		"fallback": "uix-sharp:ancestral-tablet",
	});
}

export default Component;

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
		"content": `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wigs2fbgn {
  d: path("M5.5 7H11v4.5H5.5Zm8.25 0h5v6h-5ZM5.5 14.25H11v3H5.5ZM8.25 7h.01m7.99 0h.01m-8.01 7.25h.01");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="wigs2fbgn"/></g>`,
		"fallback": "uix-sharp:concept-board",
	});
}

export default Component;

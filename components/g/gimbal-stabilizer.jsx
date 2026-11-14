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
		"content": `<style>.dula946mz {
  d: path("M5 2.5h10V9H5Zm5 3.25h.01");
}

.qfc520-0g {
  d: path("M9.5 13h5v8.5h-5Zm2.5 0v-1.5h6V5.75h-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qfc520-0g"/><path class="dula946mz"/></g>`,
		"fallback": "uix-sharp:gimbal-stabilizer",
	});
}

export default Component;

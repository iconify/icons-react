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
		"content": `<style>.ox0kwwl2b {
  d: path("M5.75 5.25h12.5v11.5H5.75zm4.25-.5v-2h4v2");
}

.ukawut6dp {
  d: path("M8 10.75h8v3.5H8v-1Zm4 6v4.5H7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ox0kwwl2b"/><path class="ukawut6dp"/></g>`,
		"fallback": "iconoven:blood-bank-sharp",
	});
}

export default Component;

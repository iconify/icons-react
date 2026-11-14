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
		"content": `<style>.nhdhxxbeu {
  d: path("M5 5h14v16.5H5Zm4.5 0V2.5h5V5");
}

.tyzfstkvr {
  d: path("M7.5 15.5a4.5 4.5 0 0 1 9 0m-4.5 0l2.5-3.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nhdhxxbeu"/><path class="tyzfstkvr"/></g>`,
		"fallback": "uix-sharp:dosimeter",
	});
}

export default Component;

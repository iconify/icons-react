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
		"content": `<style>.u7kldha6n {
  fill: currentColor;
  d: path("M9.75 16.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w4ab9hpat {
  d: path("M7 3h11.5c1.1 0 2 .9 2 2s-.9 2-2 2H17v12c0 1.4-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-1.1-2.5-2.5v-1.5H5V5c0-1.1.9-2 2-2Zm1 5.5h5.5M8 11.75h5.5");
}
</style><g class="ulnmmdpxh"><path class="w4ab9hpat"/><path class="u7kldha6n"/></g>`,
		"fallback": "uix-sharp:advance-directive",
	});
}

export default Component;

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
		"content": `<style>.asa7t-9oz {
  d: path("M10 12.5c0-3.5 1.5-5 4.5-5.5c0 3-1.5 5-4.5 5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vbh3wac6q {
  d: path("M9 18v-3.25a6.5 6.5 0 1 1 6 0V18Zm.5 3h5");
}
</style><g class="ulnmmdpxh"><path class="vbh3wac6q"/><path class="asa7t-9oz"/></g>`,
		"fallback": "uix-sharp:energy-saving",
	});
}

export default Component;

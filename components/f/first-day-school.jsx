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
		"content": `<style>.id-8-hb8q {
  d: path("M6.5 5.5h11A1.5 1.5 0 0 1 19 7v13a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 20V7a1.5 1.5 0 0 1 1.5-1.5Zm3.5 0v-1a2 2 0 0 1 4 0v1");
}

.jxyddgrou {
  d: path("M8 21.5V16a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 16 16v5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="id-8-hb8q"/><path class="jxyddgrou"/></g>`,
		"fallback": "uix-sharp:first-day-school",
	});
}

export default Component;

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
		"content": `<style>.pglhpvv_g {
  d: path("M2.5 20L12 4l9.5 16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ybpe0hbrk {
  d: path("m9.5 20l2.5-7l2.5 7");
}
</style><g class="ulnmmdpxh"><path class="pglhpvv_g"/><path class="ybpe0hbrk"/></g>`,
		"fallback": "uix-sharp:category-camping",
	});
}

export default Component;

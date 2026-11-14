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
		"content": `<style>.uyiir6m1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5v-3h14v3l2 16h-7.5L12 11l-1.5 10.5H3l2-16h14M8.25 10l-.75 7m8.25-7l.75 7");
}
</style><path class="uyiir6m1l"/>`,
		"fallback": "uix-sharp:hakama",
	});
}

export default Component;

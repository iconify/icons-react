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
		"content": `<style>.ivsj1wbje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 13.5l2.25 2l2.25-2l2.5 2l2.5-2l2.25 2l2.25-2c0 5-3 8-7 8s-7-3-7-8ZM8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm5.5-.75h.01");
}
</style><path class="ivsj1wbje"/>`,
		"fallback": "uix-sharp:egg-with-chick",
	});
}

export default Component;

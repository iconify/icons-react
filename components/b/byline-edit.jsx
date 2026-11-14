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
		"content": `<style>.e9uyn5iou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 20.5l1-4l11-11l3 3l-11 11Zm10-13l3 3m-4.5 10h8.5");
}
</style><path class="e9uyn5iou"/>`,
		"fallback": "uix-sharp:byline-edit",
	});
}

export default Component;

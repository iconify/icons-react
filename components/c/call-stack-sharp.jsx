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
		"content": `<style>.h-0bllbem {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.75h13V7.5h-13zm0 7h13v4.5h-13zm0 6.75h13v4.75h-13zM4.5 20.75V4M2.75 5.75L4.5 4l1.75 1.75");
}
</style><path class="h-0bllbem"/>`,
		"fallback": "iconoven:call-stack-sharp",
	});
}

export default Component;

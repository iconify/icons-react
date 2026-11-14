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
		"content": `<style>.fxu_hccvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h3.5v16H3Zm14.5 0H21v16h-3.5Zm-11 8l3-4l2 7l3-6l3 3");
}
</style><path class="fxu_hccvo"/>`,
		"fallback": "uix-sharp:arc-flash",
	});
}

export default Component;

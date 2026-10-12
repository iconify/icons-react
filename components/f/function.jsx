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
		"content": `<style>.hd6qq8smx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 3.75h-1A2.5 2.5 0 0 0 10.5 6L9.25 18a2.5 2.5 0 0 1-2.5 2.25H5.5M7.25 9.5h6m1.25 3.25l5 5.5m0-5.5l-5 5.5");
}
</style><path class="hd6qq8smx"/>`,
		"fallback": "iconoven:function",
	});
}

export default Component;

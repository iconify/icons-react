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
		"content": `<style>.hyjyhac5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 7H11a7 7 0 0 0-7 7v1.5h11.5ZM3 3.5h16m-8 0V7m4.5 3h6V7m-17 12.5h12A1.5 1.5 0 0 0 18 18M8 15.5v4m5-4v4");
}
</style><path class="hyjyhac5l"/>`,
		"fallback": "uix:helicopter-skids",
	});
}

export default Component;

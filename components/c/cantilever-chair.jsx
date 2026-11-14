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
		"content": `<style>.ky93dn4hi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 2.5V12a1.5 1.5 0 0 0 1.5 1.5h6.5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6m5-10.75h6");
}
</style><path class="ky93dn4hi"/>`,
		"fallback": "uix:cantilever-chair",
	});
}

export default Component;

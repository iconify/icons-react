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
		"content": `<style>.s3_u90ify {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h16L21 8h-2l2 4.5h-2l2 4.5h-2l2 4.5H3ZM3 8h16M3 12.5h16M3 17h16");
}
</style><path class="s3_u90ify"/>`,
		"fallback": "uix:cladding",
	});
}

export default Component;

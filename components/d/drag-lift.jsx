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
		"content": `<style>.owbxfpm3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 3.5v18m-2 0h4m-2-18l17 4.25M14.5 6v9.5m-3.5 0h7");
}
</style><path class="owbxfpm3u"/>`,
		"fallback": "uix:drag-lift",
	});
}

export default Component;

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
		"content": `<style>.qhdadwn6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h7v5H3Zm11 0h7v5h-7ZM3 10.75h7v5H3Zm11 0h7v5h-7ZM3.5 21.5V19h17v2.5");
}
</style><path class="qhdadwn6s"/>`,
		"fallback": "uix-sharp:cctv-control-room",
	});
}

export default Component;

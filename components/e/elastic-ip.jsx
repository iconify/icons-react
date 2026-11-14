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
		"content": `<style>.yuyb6_blo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.6 14H2.5V2.5h19V14h-1.1m-2.3 0h-1.2M6.5 8.25h.01m4.49 0h7m-4.25 10.5h7.5m-5.5-2l-2 2l2 2m3.5-4l2 2l-2 2");
}
</style><path class="yuyb6_blo"/>`,
		"fallback": "uix-sharp:elastic-ip",
	});
}

export default Component;

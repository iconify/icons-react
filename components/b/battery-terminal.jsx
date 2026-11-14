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
		"content": `<style>.hxvxgmqjn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h18v13H3Zm2.5 0V4.5H9V7m6 0V4.5h3.5V7M7.25 12v3m-1.5-1.5h3m6.5 0h3");
}
</style><path class="hxvxgmqjn"/>`,
		"fallback": "uix-sharp:battery-terminal",
	});
}

export default Component;

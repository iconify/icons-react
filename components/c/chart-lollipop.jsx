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
		"content": `<style>.f7v7x1bcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5V10m5 10.5V7m5 13.5V13M5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5-3a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="f7v7x1bcc"/>`,
		"fallback": "uix-sharp:chart-lollipop",
	});
}

export default Component;

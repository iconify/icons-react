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
		"content": `<style>.dywcq8bqf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15v3a2 2 0 0 0 2 2h6.25M12 3.5V15m-4.5-4.5L12 15l4.5-4.5m0 5v5m3.25-5v5");
}
</style><path class="dywcq8bqf"/>`,
		"fallback": "uix:download-paused",
	});
}

export default Component;

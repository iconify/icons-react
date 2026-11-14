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
		"content": `<style>.h0glhnzyj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 4.75h3a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5h-3A3.5 3.5 0 0 1 7 18V8.25a3.5 3.5 0 0 1 3.5-3.5m-.5 0V3h4v1.75M12 8v3m-1.5-1.5h3m-3 7.5h3");
}
</style><path class="h0glhnzyj"/>`,
		"fallback": "uix:battery-cell",
	});
}

export default Component;

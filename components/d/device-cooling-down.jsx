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
		"content": `<style>.cqk8vu3-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.95 13.25H3.5V3h15v10.2m-16 3.3h10.9m5.35-.5v5.5m-2.5-4.25l5 3m-5 0l5-3");
}
</style><path class="cqk8vu3-t"/>`,
		"fallback": "uix-sharp:device-cooling-down",
	});
}

export default Component;

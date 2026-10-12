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
		"content": `<style>.fjpydggyc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 14.6V5a2 2 0 0 1 4 0v9.6a3.25 3.25 0 1 1-4 0M13.75 4q-1.5 2 0 4t0 4t0 4t0 4m4.5-16q-1.5 2 0 4t0 4t0 4t0 4");
}
</style><path class="fjpydggyc"/>`,
		"fallback": "iconoven:heat-index",
	});
}

export default Component;

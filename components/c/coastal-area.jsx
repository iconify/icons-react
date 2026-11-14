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
		"content": `<style>.yq1c4ebov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18c3-3 6-3 9 0s6 3 9 0M3 12c3-3 6-3 9 0s6 3 9 0m-6-6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="yq1c4ebov"/>`,
		"fallback": "uix:coastal-area",
	});
}

export default Component;

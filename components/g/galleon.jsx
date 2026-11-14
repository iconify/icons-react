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
		"content": `<style>.m9rvx9bcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h3v4h16L19 20H5l-2.5-5Zm6-7H13q.75 3.5 0 7H8.5q.75-3.5 0-7M16 5h4.5q.75 3 0 6H16q.75-3 0-6m-5.25 6v4m7.5-4v4");
}
</style><path class="m9rvx9bcp"/>`,
		"fallback": "uix:galleon",
	});
}

export default Component;

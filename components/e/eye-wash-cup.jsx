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
		"content": `<style>.nmf461bec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 12.25h16.5a8.25 3.5 0 0 1-16.5 0m8.25 3.5v5.5m-3.5 0h7m-7-9V10m7 2.25V10m-7-1.75c0-1.6.6-2.9 1.5-4m5.5 4c0-1.6-.6-2.9-1.5-4");
}
</style><path class="nmf461bec"/>`,
		"fallback": "iconoven:eye-wash-cup",
	});
}

export default Component;

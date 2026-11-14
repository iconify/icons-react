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
		"content": `<style>.favopjkcj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5C2.5 6.25 7 3 12 3s9.5 3.25 9.5 7.5ZM4.25 15a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6-.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6 .75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M3 21.5c0-2 1.25-3 3-3s3 1 3 3m0-.75c0-2 1.25-3 3-3s3 1 3 3m0 .75c0-2 1.25-3 3-3s3 1 3 3");
}
</style><path class="favopjkcj"/>`,
		"fallback": "uix:family-plan",
	});
}

export default Component;

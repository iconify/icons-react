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
		"content": `<style>.wds5iz5fu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9h15m-13 0a5.5 5.5 0 0 1 11 0M7 9v1.5a4 4 0 0 0 8 0V9M4 21.5c0-2.5 3-4.25 7-4.25s7 1.75 7 4.25m2.75 0V13m-2.25 0H22");
}
</style><path class="wds5iz5fu"/>`,
		"fallback": "uix:geologist",
	});
}

export default Component;

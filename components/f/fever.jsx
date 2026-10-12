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
		"content": `<style>.y1_iqqbet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 12.75V5a2.25 2.25 0 0 1 4.5 0v7.75a4.25 4.25 0 1 1-4.5 0M9 7v8.5m6.5-8.75c-1 1 1 2.25 0 3.25s1 2.25 0 3.25m4-6.5c-1 1 1 2.25 0 3.25s1 2.25 0 3.25");
}
</style><path class="y1_iqqbet"/>`,
		"fallback": "iconoven:fever",
	});
}

export default Component;

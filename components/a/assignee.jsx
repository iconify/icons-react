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
		"content": `<style>.awbtfu2dd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM3 20.5c0-3.75 3.25-6 7.5-6c1.187 0 2.295.175 3.277.51M14.75 18l2 2L21 15.75");
}
</style><path class="awbtfu2dd"/>`,
		"fallback": "uix-sharp:assignee",
	});
}

export default Component;

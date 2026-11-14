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
		"content": `<style>.rgq6_9s1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18l-2 10H5Zm1.5 0a3 3 0 0 1 3.75-3.75a3.75 3.75 0 0 1 7.5 0A3 3 0 0 1 19.5 11");
}
</style><path class="rgq6_9s1z"/>`,
		"fallback": "uix:bulk-bin",
	});
}

export default Component;

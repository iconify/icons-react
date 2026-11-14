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
		"content": `<style>.zbqq7k5ur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h1.75A2.625 2.625 0 0 1 9.5 5.125v.75A2.625 2.625 0 0 1 6.875 8.5h-1.75A2.625 2.625 0 0 1 2.5 5.875v-.75A2.625 2.625 0 0 1 5.125 2.5m12 0h1.75A2.625 2.625 0 0 1 21.5 5.125v.75A2.625 2.625 0 0 1 18.875 8.5h-1.75A2.625 2.625 0 0 1 14.5 5.875v-.75A2.625 2.625 0 0 1 17.125 2.5m0 13h1.75a2.625 2.625 0 0 1 2.625 2.625v.75a2.625 2.625 0 0 1-2.625 2.625h-1.75a2.625 2.625 0 0 1-2.625-2.625v-.75a2.625 2.625 0 0 1 2.625-2.625M9.5 5.5h5M6 8.5v10h8.5");
}
</style><path class="zbqq7k5ur"/>`,
		"fallback": "uix:graph-structure",
	});
}

export default Component;

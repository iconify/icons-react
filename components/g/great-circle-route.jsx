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
		"content": `<style>.ov_py7_zm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Zm0 0h19M6.75 13.5l2.5-3m1.25-1l2.75-1M15 8.25l2 .25m-11 7h.01M18 8.5h.01");
}
</style><path class="ov_py7_zm"/>`,
		"fallback": "uix-sharp:great-circle-route",
	});
}

export default Component;

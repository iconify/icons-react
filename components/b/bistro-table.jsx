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
		"content": `<style>.fn6cogb1v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 5a9 2 0 1 0 18 0A9 2 0 1 0 3 5Zm9 2v10.5M6.5 21q5.5 0 5.5-3.5q0 3.5 5.5 3.5");
}
</style><path class="fn6cogb1v"/>`,
		"fallback": "uix-sharp:bistro-table",
	});
}

export default Component;

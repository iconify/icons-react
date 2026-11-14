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
		"content": `<style>.mms2efb1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 6.75a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3 18.25a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm13 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-5.75-8.5L6.75 16m7-6.25l3.5 6.25M8 18.25h8");
}
</style><path class="mms2efb1w"/>`,
		"fallback": "uix-sharp:infra-graph",
	});
}

export default Component;

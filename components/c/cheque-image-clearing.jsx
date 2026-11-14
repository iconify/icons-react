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
		"content": `<style>.qg-yk30mn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 5.5H4.5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4.25m-3.5-9h1m-1 5h1m5.25-9H13V7h-1.5Zm0 5.75H13v1.5h-1.5Zm0 5.75H13v1.5h-1.5Zm4.25-8.75h1.5v1.5h-1.5Zm0 5.75h1.5v1.5h-1.5ZM20 11.25h1.5v1.5H20Z");
}
</style><path class="qg-yk30mn"/>`,
		"fallback": "uix-sharp:cheque-image-clearing",
	});
}

export default Component;

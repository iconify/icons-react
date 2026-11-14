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
		"content": `<style>.j5k97weor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h3.25v8.5H2.5Zm6-6h3.25v14.5H8.5Zm6 3.5h3.25v11H14.5ZM2 20.5h20m-1.25-12v12m0-14c-1.25-1.5-.5-3 .25-4");
}
</style><path class="j5k97weor"/>`,
		"fallback": "uix-sharp:gas-processing-plant",
	});
}

export default Component;

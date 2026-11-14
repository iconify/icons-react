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
		"content": `<style>.u9e1v7but {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12h12m-6-6v12m-9.5-6L6 9v6Zm19 0L18 9v6ZM12 2.5L9 6h6Zm0 19L9 18h6Z");
}
</style><path class="u9e1v7but"/>`,
		"fallback": "uix-sharp:cursor-move",
	});
}

export default Component;

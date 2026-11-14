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
		"content": `<style>.feih1gbbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 6l9 6l-9 6l-9-6Zm-6 4l9 6M9 8l9 6m-3-6l-9 6m12-4l-9 6");
}
</style><path class="feih1gbbs"/>`,
		"fallback": "uix-sharp:grid-floor-3d",
	});
}

export default Component;

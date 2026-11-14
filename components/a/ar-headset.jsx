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
		"content": `<style>.u7ol_81nz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5h19v4a3 3 0 0 1-3 3h-4L12 15l-2.5 2.5h-4a3 3 0 0 1-3-3Zm2.5 0C5 4 19 4 19 10.5");
}
</style><path class="u7ol_81nz"/>`,
		"fallback": "uix-sharp:ar-headset",
	});
}

export default Component;

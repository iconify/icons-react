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
		"content": `<style>.pwkyovtvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l8.5 4l-8.5 4l-8.5-4Zm-8.5 8.5l8.5 4l8.5-4m-17 4.25v1.5l8.5 4l8.5-4v-1.5");
}
</style><path class="pwkyovtvm"/>`,
		"fallback": "uix-sharp:full-stack",
	});
}

export default Component;

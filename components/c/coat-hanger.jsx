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
		"content": `<style>.yk1v3qbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 6.5a2 2 0 1 1 2 2V11l8.5 6.75a1 1 0 0 1-.5 1.75H4a1 1 0 0 1-.5-1.75L12 11");
}
</style><path class="yk1v3qbsu"/>`,
		"fallback": "uix-sharp:coat-hanger",
	});
}

export default Component;

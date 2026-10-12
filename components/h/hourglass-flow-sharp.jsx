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
		"content": `<style>.reuv5zb3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12l-4.5 7.25h-3Zm6 7.25v3.5m-1.5 0h3L18 21H6Z");
}
</style><path class="reuv5zb3a"/>`,
		"fallback": "iconoven:hourglass-flow-sharp",
	});
}

export default Component;

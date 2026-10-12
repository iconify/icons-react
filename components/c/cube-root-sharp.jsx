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
		"content": `<style>.uiywbk0ie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h2.5L9 20.25l5-16.5h7.25m-17.75 0h3.25L5 6.25h2.25v3.5H4l-.5-.5");
}
</style><path class="uiywbk0ie"/>`,
		"fallback": "iconoven:cube-root-sharp",
	});
}

export default Component;

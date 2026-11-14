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
		"content": `<style>.vv3jiybbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10H9v4H2.5ZM15 10h6.5v4H15Zm-3 11.5V3M8 7l4-4l4 4");
}
</style><path class="vv3jiybbx"/>`,
		"fallback": "uix-sharp:active-transport",
	});
}

export default Component;

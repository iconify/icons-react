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
		"content": `<style>.oua92fvfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h10v4h-10Zm0 8h13v4h-13Zm0 7h13v4h-13Zm12.75-13H21m-2.25-2.25L21 4.5l-2.25 2.25");
}
</style><path class="oua92fvfk"/>`,
		"fallback": "uix-sharp:backlog-move",
	});
}

export default Component;

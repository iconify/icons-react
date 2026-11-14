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
		"content": `<style>.g00i1pb0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9V5h-9ZM6 7.75h12V21.5H6Zm6 3.75v6m-3-3h6");
}
</style><path class="g00i1pb0a"/>`,
		"fallback": "uix-sharp:hospital-pharmacy",
	});
}

export default Component;

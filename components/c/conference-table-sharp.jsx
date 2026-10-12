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
		"content": `<style>.g9dnn-bcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.75h6.5v16.5h-6.5zm-6 2.75h3V10h-3zm0 7.5h3v3.5h-3zm15.5-7.5h3V10h-3zm0 7.5h3v3.5h-3z");
}
</style><path class="g9dnn-bcv"/>`,
		"fallback": "iconoven:conference-table-sharp",
	});
}

export default Component;

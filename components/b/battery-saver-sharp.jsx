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
		"content": `<style>.w19fhwbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.75h16v10.5h-16zm18.5 3.75v3M6 10v4m3.25-4v4m3.25-4v4m3.25-4v4");
}
</style><path class="w19fhwbsy"/>`,
		"fallback": "iconoven:battery-saver-sharp",
	});
}

export default Component;

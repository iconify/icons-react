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
		"content": `<style>.ra0fumbop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.52 9.591l7.071-7.071l3.889 3.889l-7.071 7.071ZM11 10l5.5 5.5m-5 3h10v3h-10Z");
}
</style><path class="ra0fumbop"/>`,
		"fallback": "uix-sharp:impeachment",
	});
}

export default Component;

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
		"content": `<style>.e8u4_pb9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l7 7l-7 7l-7-7Zm0 14v5m-3 0h6");
}
</style><path class="e8u4_pb9t"/>`,
		"fallback": "uix-sharp:construction-zone-sign",
	});
}

export default Component;

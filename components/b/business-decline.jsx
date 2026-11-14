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
		"content": `<style>.yf8z-bb-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4v16M7.75 8.5V20M12 13v4.6m0 1.8v.6m6-5.5v7m-3-3l3 3l3-3");
}
</style><path class="yf8z-bb-f"/>`,
		"fallback": "uix-sharp:business-decline",
	});
}

export default Component;

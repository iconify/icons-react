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
		"content": `<style>.x9s_sl9lc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3l8.5 4.5L12 12L3.5 7.5Zm-8.5 9.5L12 17l.957-.506m5.921-3.135L20.5 12.5m-4.75 3H17l4.25 6m-2.75-3.25l-2.75 3.25");
}
</style><path class="x9s_sl9lc"/>`,
		"fallback": "uix-sharp:function-layer",
	});
}

export default Component;

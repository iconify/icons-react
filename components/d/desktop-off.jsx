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
		"content": `<style>.hfb9w6b8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.4 2.5h15.1V15h-2.6m-7.8 0H2.5V6.4m15.1 15.1H3.5v-3h11.1M3.5 3.5l17 17");
}
</style><path class="hfb9w6b8h"/>`,
		"fallback": "uix-sharp:desktop-off",
	});
}

export default Component;

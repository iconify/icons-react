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
		"content": `<style>.nu1x9wg_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12l-6 8.5Zm6 8.5v7m-9 3v-3h18v3");
}
</style><path class="nu1x9wg_e"/>`,
		"fallback": "uix-sharp:bar-counter-event",
	});
}

export default Component;

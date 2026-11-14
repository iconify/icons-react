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
		"content": `<style>.h_blhkd7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.8 17.5H2.5v-14h18v8.7M6 8h11M6 12h5.5m3.5 9.5c0-4.5 2-6.5 6.5-6.5c0 4.5-2 6.5-6.5 6.5Z");
}
</style><path class="h_blhkd7t"/>`,
		"fallback": "uix-sharp:carbon-credit",
	});
}

export default Component;

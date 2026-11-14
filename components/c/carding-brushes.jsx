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
		"content": `<style>.m4wzmkb-a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7h12l6.5-3.5M21 17H9l-6.5 3.5M4.5 7v2.5m3-2.5v2.5m3-2.5v2.5m3-2.5v2.5m-3 7.5v-2.5m3 2.5v-2.5m3 2.5v-2.5m3 2.5v-2.5");
}
</style><path class="m4wzmkb-a"/>`,
		"fallback": "uix-sharp:carding-brushes",
	});
}

export default Component;

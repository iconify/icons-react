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
		"content": `<style>.nv6vwxlws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 18.5L6 14l3 1.5l2.5-3.5m10-9l-10 9l10 8.5m-7-8.5H16m2 0h1.5");
}
</style><path class="nv6vwxlws"/>`,
		"fallback": "uix-sharp:chart-forecast-band",
	});
}

export default Component;

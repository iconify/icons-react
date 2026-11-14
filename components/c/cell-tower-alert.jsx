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
		"content": `<style>.u6vt53dws {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 21.5l5.5-14l4.738 12.061M7.75 14.5h5.5L5 21.5m2.75-7l7.473 6.34M10.5 4.75h.01M8.555 6.695a2.75 2.75 0 0 1 0-3.89m3.89 0a2.75 2.75 0 0 1 0 3.89M18 14.5V18m0 3h.01");
}
</style><path class="u6vt53dws"/>`,
		"fallback": "uix-sharp:cell-tower-alert",
	});
}

export default Component;

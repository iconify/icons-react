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
		"content": `<style>.ji5bhfbmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Zm3.5-8.75h5m-5 17.5h5M3.25 9.5v5m17.5-5v5");
}
</style><path class="ji5bhfbmx"/>`,
		"fallback": "uix-sharp:conference-table",
	});
}

export default Component;

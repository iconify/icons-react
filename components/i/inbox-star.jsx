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
		"content": `<style>.flvzd1itd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h5l1.5 2.5h5L16 12h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm9-9l1.029 2.334l2.537.257l-1.902 1.7l.54 2.493L12 8.5L9.796 9.784l.54-2.493l-1.902-1.7l2.537-.257Z");
}
</style><path class="flvzd1itd"/>`,
		"fallback": "uix-sharp:inbox-star",
	});
}

export default Component;

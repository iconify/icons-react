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
		"content": `<style>.tif2u2b_c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h14l4.5 5.25L17 13.5H3Zm7 10.5v8M6 6v4.5m0-2.25h9M15 6v4.5");
}
</style><path class="tif2u2b_c"/>`,
		"fallback": "uix-sharp:distance-sign",
	});
}

export default Component;

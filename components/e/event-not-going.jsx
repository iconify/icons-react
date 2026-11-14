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
		"content": `<style>.t1z_lu2gg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.4 4.5H21v12.6m-3.4 4.4H3V6.9M3 10h3.1m7.8 0H21M9 2.5v2.6m6-2.6V6M3.5 3.5l17 17");
}
</style><path class="t1z_lu2gg"/>`,
		"fallback": "uix-sharp:event-not-going",
	});
}

export default Component;

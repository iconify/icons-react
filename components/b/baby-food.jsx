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
		"content": `<style>.br0i09bkj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.75h11.5v13H3Zm1-3.5h9.5v3.5H4ZM3 12h11.5M3 16.5h11.5m3 4.25l2-10.5M18 7a1.75 3 0 1 0 3.5 0A1.75 3 0 1 0 18 7Z");
}
</style><path class="br0i09bkj"/>`,
		"fallback": "uix-sharp:baby-food",
	});
}

export default Component;

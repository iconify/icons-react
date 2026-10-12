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
		"content": `<style>.myp1qbche {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.75h6c2.75 1.5 4.75 4 4.75 7A6.25 6.25 0 0 1 13.5 21h-3a6.25 6.25 0 0 1-6.25-6.25c0-3 2-5.5 4.75-7Zm3 6v-2m0 5v2m.87-4.5l1.73-1m-3.47 1l-1.73-1m3.47 3l1.73 1m-3.47-1l-1.73 1m-1.15-9.5v-3.5h7.5v3.5Z");
}
</style><path class="myp1qbche"/>`,
		"fallback": "iconoven:ice-pack-sharp",
	});
}

export default Component;

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
		"content": `<style>.l6h-t8v0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5c4.5 0 7 6.5 7 11.5c0 4.5-3 7.5-7 7.5s-7-3-7-7.5C5 9 7.5 2.5 12 2.5ZM5.5 11l12.25-3.75M5 15l13.75-4m-12.5 7.75L18.75 15");
}
</style><path class="l6h-t8v0y"/>`,
		"fallback": "uix-sharp:easter-egg-striped",
	});
}

export default Component;

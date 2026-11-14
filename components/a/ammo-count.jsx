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
		"content": `<style>.pxbob4bok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 21V10.5q0-5.5 2-7.5q2 2 2 7.5V21ZM10 21V10.5Q10 5 12 3q2 2 2 7.5V21Zm6.75 0V10.5q0-5.5 2-7.5q2 2 2 7.5V21Z");
}
</style><path class="pxbob4bok"/>`,
		"fallback": "uix-sharp:ammo-count",
	});
}

export default Component;

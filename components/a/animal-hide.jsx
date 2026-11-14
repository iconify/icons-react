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
		"content": `<style>.d5t8bxb2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 9.5l19-4.75M4.5 9v10.5m15-14.25V19.5m-17 0h19m-14-8h9v3h-9Z");
}
</style><path class="d5t8bxb2x"/>`,
		"fallback": "uix-sharp:animal-hide",
	});
}

export default Component;

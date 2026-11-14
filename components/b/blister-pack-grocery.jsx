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
		"content": `<style>.kahpr1bha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 17.5l3.5-7h15.5l-3.5 7Zm4.25-7V7a2 2 0 0 1 4 0v3.5m3 0V7a2 2 0 0 1 4 0v3.5");
}
</style><path class="kahpr1bha"/>`,
		"fallback": "uix-sharp:blister-pack-grocery",
	});
}

export default Component;

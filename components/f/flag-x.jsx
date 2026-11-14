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
		"content": `<style>.w60jsqylq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h14l-3 4.25l3 4H5Zm0-1v18m10.5-5.5l5 5m0-5l-5 5");
}
</style><path class="w60jsqylq"/>`,
		"fallback": "uix-sharp:flag-x",
	});
}

export default Component;

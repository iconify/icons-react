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
		"content": `<style>.z5k-dz6wj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 7.5l9.5 8.5L8 20.5v-17L12.5 8L3 16.5m13.227-9.25a9.5 9.5 0 0 1 0 9.5m3.555-10.244a13 13 0 0 1 0 10.988");
}
</style><path class="z5k-dz6wj"/>`,
		"fallback": "uix-sharp:bluetooth-audio",
	});
}

export default Component;

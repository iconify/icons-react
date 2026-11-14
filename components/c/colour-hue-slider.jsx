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
		"content": `<style>.hmwls-b6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm9 0h4.5m3 0h3m-6-3.5h3v7h-3Z");
}
</style><path class="hmwls-b6s"/>`,
		"fallback": "uix-sharp:colour-hue-slider",
	});
}

export default Component;

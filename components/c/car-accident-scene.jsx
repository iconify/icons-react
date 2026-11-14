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
		"content": `<style>.x4_8qybrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 4.5l4.5 13h-9Zm-7 16h14M9.75 11h4.5");
}
</style><path class="x4_8qybrx"/>`,
		"fallback": "uix-sharp:car-accident-scene",
	});
}

export default Component;

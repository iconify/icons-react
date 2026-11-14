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
		"content": `<style>.x093x7b4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10.5L7.25 17H19m-6.5 0v4.5m-3.5 0h7M5 5h13.5M16 2.5L18.5 5L16 7.5");
}
</style><path class="x093x7b4j"/>`,
		"fallback": "uix-sharp:forward-facing-seat",
	});
}

export default Component;

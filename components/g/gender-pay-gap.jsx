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
		"content": `<style>.fjbgotbrt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16.75h7v2.75h-7ZM3 14h7v2.75H3Zm-.5-2.75h7V14h-7ZM3 8.5h7v2.75H3Zm-.5-2.75h7V8.5h-7Zm11.5 11h7v2.75h-7Zm.5-2.75h7v2.75h-7ZM16 5.75h3.5m-1.75 0v5.5m-1.75 0h3.5");
}
</style><path class="fjbgotbrt"/>`,
		"fallback": "uix-sharp:gender-pay-gap",
	});
}

export default Component;

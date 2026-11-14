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
		"content": `<style>.h7zssibef {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 19.5l3-7H8L9.5 7h7l1.5 5.5h1l2.5 7ZM11.75 7v5.5M14.5 7v7.5");
}
</style><path class="h7zssibef"/>`,
		"fallback": "uix-sharp:badlands",
	});
}

export default Component;

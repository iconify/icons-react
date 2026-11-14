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
		"content": `<style>.gopc2wb6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.237 8.404l16.42-4.4l3.106 11.592l-16.42 4.4ZM6.5 12h11");
}
</style><path class="gopc2wb6j"/>`,
		"fallback": "uix-sharp:dutch-angle",
	});
}

export default Component;

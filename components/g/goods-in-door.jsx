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
		"content": `<style>.cnohd8b4j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19m-18 0v19m17-19v9.9m-9.1.6H5.5V4.5h13v7.9m-13-5.15h13M5.5 10h13m-16 11.5h8.9m2.85-6.25h7.5v6.5h-7.5Zm3.75 0V18");
}
</style><path class="cnohd8b4j"/>`,
		"fallback": "uix-sharp:goods-in-door",
	});
}

export default Component;

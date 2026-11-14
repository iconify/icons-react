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
		"content": `<style>.qbl6tcc4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8.5L12 3l8.5 5.5Zm2 0h13v13h-13Zm0 6.5h13M10 18.25h4");
}
</style><path class="qbl6tcc4n"/>`,
		"fallback": "uix-sharp:apiary",
	});
}

export default Component;

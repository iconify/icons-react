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
		"content": `<style>.f3z73mdva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 9.25a6.25 6.25 0 0 1 12.5 0v1.25H5.75zM7 12.75h10l-4.25 7.5l-.75 1.406l-.75-1.406Zm3.75 2.75h2.5");
}
</style><path class="f3z73mdva"/>`,
		"fallback": "iconoven:ice-cream-sharp",
	});
}

export default Component;

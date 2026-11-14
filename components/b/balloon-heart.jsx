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
		"content": `<style>.f6nv60bmp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15s-7.5-4-7.5-8c0-2.25 1.75-4 4-4c1.5 0 2.75.75 3.5 2c.75-1.25 2-2 3.5-2c2.25 0 4 1.75 4 4c0 4-7.5 8-7.5 8Zm0 0c0 2.5 1.5 3.5.5 6.5");
}
</style><path class="f6nv60bmp"/>`,
		"fallback": "uix-sharp:balloon-heart",
	});
}

export default Component;

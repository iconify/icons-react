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
		"content": `<style>.srliyxanz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.75h5V5.5h-5zM3.75 8.5h8.5v12.75h-8.5zm14-3.75c2.5 2.5 2.5 4.5 0 7s-2.5 4.5 0 7");
}
</style><path class="srliyxanz"/>`,
		"fallback": "iconoven:conditioner-sharp",
	});
}

export default Component;

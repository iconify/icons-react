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
		"content": `<style>.pb3m5zrul {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.282 5.282h7.072l-2.122 2.122l6.364 6.364l2.122-2.122v7.072h-7.072l2.122-2.122l-6.364-6.364l-2.122 2.122Z");
}
</style><path class="pb3m5zrul"/>`,
		"fallback": "uix-sharp:cursor-resize-diagonal",
	});
}

export default Component;

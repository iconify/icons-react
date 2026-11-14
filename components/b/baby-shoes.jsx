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
		"content": `<style>.yhwz8_ine {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5h5.5v13h-6c-1.25 0-2-.75-2-2c0-2 1-3.5 2.5-4Zm14 0h-5.5v13h6c1.25 0 2-.75 2-2c0-2-1-3.5-2.5-4ZM5 9h5.5m3 0H19");
}
</style><path class="yhwz8_ine"/>`,
		"fallback": "uix-sharp:baby-shoes",
	});
}

export default Component;

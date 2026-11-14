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
		"content": `<style>.i7ajz4dwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h8.25V13H2.5Zm10.75 0h8.25V13h-8.25ZM6.75 13v3h10.5v-3M12 16v4m-4 0h8");
}
</style><path class="i7ajz4dwm"/>`,
		"fallback": "uix-sharp:dual-monitors",
	});
}

export default Component;

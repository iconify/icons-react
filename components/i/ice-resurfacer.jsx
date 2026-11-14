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
		"content": `<style>.pm225ru-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h15v8.5h-15Zm9.75-3.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM4.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6-7.5h3.5v5");
}
</style><path class="pm225ru-t"/>`,
		"fallback": "uix-sharp:ice-resurfacer",
	});
}

export default Component;

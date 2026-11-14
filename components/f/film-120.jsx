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
		"content": `<style>.th2tb6w-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 5h9v14h-9Zm-2-2.5h13V5h-13Zm0 16.5h13v2.5h-13Zm11-11H21v8h-4.5");
}
</style><path class="th2tb6w-s"/>`,
		"fallback": "uix-sharp:film-120",
	});
}

export default Component;

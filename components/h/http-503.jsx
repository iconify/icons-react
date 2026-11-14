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
		"content": `<style>.hs1omlb1a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19V9h-19Zm9 16h-9V12h12.9m5.2 0h.9v.5M6 5.75h.01M6 15.25h.01M14.25 18a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm2 0h3.5");
}
</style><path class="hs1omlb1a"/>`,
		"fallback": "uix-sharp:http-503",
	});
}

export default Component;

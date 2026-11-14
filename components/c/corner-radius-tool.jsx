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
		"content": `<style>.tmnhe3snf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21V11a8 8 0 0 1 8-8h10m-3 12v6m-3-3h6");
}
</style><path class="tmnhe3snf"/>`,
		"fallback": "uix-sharp:corner-radius-tool",
	});
}

export default Component;

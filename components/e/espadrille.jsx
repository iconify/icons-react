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
		"content": `<style>.edck4op-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12.5v-5q4.5 2 8-.5c4.5 0 9 2.5 9 5.5m-18 0h19V17h-19Z");
}
</style><path class="edck4op-g"/>`,
		"fallback": "uix-sharp:espadrille",
	});
}

export default Component;

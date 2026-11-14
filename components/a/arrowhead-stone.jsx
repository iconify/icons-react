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
		"content": `<style>.w1l9vfofk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.5 3.5l-3 8L16 8l-3.5-1.5ZM16 8L3.5 20.5");
}
</style><path class="w1l9vfofk"/>`,
		"fallback": "uix-sharp:arrowhead-stone",
	});
}

export default Component;

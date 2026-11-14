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
		"content": `<style>.pzdw07byz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11h13v10.5h-13ZM12 2l2 2.75a2.25 2.25 0 1 1-4 0ZM9 13.75v5m3-5v5m3-5v5");
}
</style><path class="pzdw07byz"/>`,
		"fallback": "uix-sharp:floor-drain",
	});
}

export default Component;

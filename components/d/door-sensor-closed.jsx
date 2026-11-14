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
		"content": `<style>.y39q3kcje {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h8v16H4Zm10.75 0h5v16h-5ZM8 8h.01");
}
</style><path class="y39q3kcje"/>`,
		"fallback": "uix-sharp:door-sensor-closed",
	});
}

export default Component;

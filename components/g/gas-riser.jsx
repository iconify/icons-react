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
		"content": `<style>.ferspst6d {
  d: path("M17.5 13.5c2.25 1.5 4 3 4 4.5a3.5 3.5 0 0 1-7 0c0-1.25.75-2.25 1.5-3c.25 1 .75 1.5 1.5 1.75c-.5-1.25-.5-2.25 0-3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_obiy_2d {
  d: path("M12.74 21.5H10V8l5.75-5l5.75 5v5.06M3 21.5V13a2 2 0 0 1 2-2h5m0 3H6v7.5");
}
</style><g class="ulnmmdpxh"><path class="v_obiy_2d"/><path class="ferspst6d"/></g>`,
		"fallback": "uix-sharp:gas-riser",
	});
}

export default Component;

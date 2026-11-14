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
		"content": `<style>.pn8oddcbb {
  d: path("M12 9.5c1.75 2.25 2 3 2 3.75a2 2 0 0 1-4 0c0-.75.25-1.5 2-3.75Z");
}

.rck2j3x_u {
  d: path("M9.5 2.5h5V6h-5ZM8.5 6h7L18 18v3H6v-3ZM6 18h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rck2j3x_u"/><path class="pn8oddcbb"/></g>`,
		"fallback": "uix-sharp:gel-tube",
	});
}

export default Component;

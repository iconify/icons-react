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
		"content": `<style>.d1fc4xb_r {
  d: path("M8.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm0 0h7M12 18v3.5");
}

.eu3dd_urx {
  d: path("M9 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-5.5 16v-3c0-4 3.75-7 8.5-7s8.5 3 8.5 7v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eu3dd_urx"/><path class="d1fc4xb_r"/></g>`,
		"fallback": "uix-sharp:driver",
	});
}

export default Component;

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
		"content": `<style>.mi5ufibpi {
  d: path("M2.5 2.5h19v19h-19Zm0 12.5L9 21.5M2.5 9L15 21.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zailfqhkz {
  d: path("M13 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}
</style><g class="ulnmmdpxh"><path class="mi5ufibpi"/><path class="zailfqhkz"/></g>`,
		"fallback": "uix-sharp:colour-picker-square",
	});
}

export default Component;

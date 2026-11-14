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
		"content": `<style>.epqfxn5zz {
  d: path("M9 9a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm7 7.75L17.5 19a1.75 1.75 0 1 1-3 0Z");
}

.oftlruavh {
  d: path("M2.5 9C5 4.75 8.25 3 12 3s7 1.75 9.5 6c-2.5 4.25-5.75 6-9.5 6s-7-1.75-9.5-6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oftlruavh"/><path class="epqfxn5zz"/></g>`,
		"fallback": "uix-sharp:eye-tear",
	});
}

export default Component;

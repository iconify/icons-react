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
		"content": `<style>.fjsu1ccby {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 12h.75A2.625 2.625 0 0 1 9 14.625v4.25A2.625 2.625 0 0 1 6.375 21.5h-.75A2.625 2.625 0 0 1 3 18.875v-4.25A2.625 2.625 0 0 1 5.625 12M5 12V9.5h2.5m9.352 9h2.898a1.75 1.75 0 0 0 1.75-1.75v-12a1.25 1.25 0 0 0-1.25-1.25a1.68 1.68 0 0 0-1.609 1.197l-3.465 11.55a1.75 1.75 0 0 0 1.676 2.253M10 7l3-2m-2.5 5l3 .75");
}
</style><path class="fjsu1ccby"/>`,
		"fallback": "uix:aircraft-paint",
	});
}

export default Component;

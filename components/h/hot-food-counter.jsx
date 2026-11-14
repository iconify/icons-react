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
		"content": `<style>.vd795chok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 14h13.75a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 18.875 21H5.125A2.625 2.625 0 0 1 2.5 18.375v-1.75A2.625 2.625 0 0 1 5.125 14M2.5 17.5h19m-16-6.25a6.5 6.5 0 0 1 13 0ZM12 3v1.75");
}
</style><path class="vd795chok"/>`,
		"fallback": "uix:hot-food-counter",
	});
}

export default Component;

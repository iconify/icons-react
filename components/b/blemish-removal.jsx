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
		"content": `<style>.f4iiuef-p {
  d: path("M13.5 8.25a2.75 2.75 0 0 1 2.382 1.375m0 2.75A2.75 2.75 0 0 1 13.5 13.75m-2.382-1.375a2.75 2.75 0 0 1 0-2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jr-gnybef {
  d: path("M7 21.5v-4c-2.5-1.5-3.5-4-3.5-7c0-4.5 3.5-8 8.5-8c4 0 6.5 2.5 7 6l1.5 3H19V14c0 1.5-1 2.5-2.5 2.5H15v5M13.5 11h.01");
}
</style><g class="hntgybcog"><path class="jr-gnybef"/><path class="f4iiuef-p"/></g>`,
		"fallback": "uix:blemish-removal",
	});
}

export default Component;

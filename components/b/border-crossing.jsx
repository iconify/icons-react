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
		"content": `<style>.ayoraytda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.342 9.859l9.959-5.75a1.75 1.75 0 0 1 2.39.641a1.75 1.75 0 0 1-.64 2.391l-9.959 5.75a1.75 1.75 0 0 1-2.391-.641a1.75 1.75 0 0 1 .641-2.391m3.68-2.125l1.75 3.032m2.147-5.282l1.75 3.032M6 15.75V21m-3 0h8");
}
</style><path class="ayoraytda"/>`,
		"fallback": "uix:border-crossing",
	});
}

export default Component;

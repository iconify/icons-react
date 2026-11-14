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
		"content": `<style>.xk411vbjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 12l-4 3.75l4 3.75M17 12l4 3.75l-4 3.75m-5.25-15h.5A1.75 1.75 0 0 1 14 6.25v3.5a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 9.75v-3.5a1.75 1.75 0 0 1 1.75-1.75m-2.25-2h5m-2.5 0v2m0 7V16");
}
</style><path class="xk411vbjx"/>`,
		"fallback": "uix:code-injection",
	});
}

export default Component;

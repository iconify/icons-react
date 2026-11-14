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
		"content": `<style>.nq370tbbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8V8L8 10.5H2.5Zm5.5 8V8h2.5m3-5.5h8V8L19 10.5h-5.5Zm5.5 8V8h2.5M7.75 13.5h8V19l-2.5 2.5h-5.5Zm5.5 8V19h2.5");
}
</style><path class="nq370tbbp"/>`,
		"fallback": "uix:affinity-map",
	});
}

export default Component;

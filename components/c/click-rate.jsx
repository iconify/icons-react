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
		"content": `<style>.io0kc2bff {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.867 4.521l8.891 4.015a1.392 1.392 0 0 1-.133 2.589l-2.645.882a1.5 1.5 0 0 0-.958.978l-.897 2.89a1.335 1.335 0 0 1-2.516.094L4.854 6.437a1.5 1.5 0 0 1 2.013-1.916M14.75 21.25l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="io0kc2bff"/>`,
		"fallback": "uix:click-rate",
	});
}

export default Component;

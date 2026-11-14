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
		"content": `<style>.mowxoqbzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 3h9.75A2.625 2.625 0 0 1 19.5 5.625v5.25a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 10.875v-5.25A2.625 2.625 0 0 1 7.125 3M2.5 13.5h16.9M4.5 6.75h15M12 3v3.75M14.75 18l2 2L21 15.75");
}
</style><path class="mowxoqbzl"/>`,
		"fallback": "uix:final-assembly",
	});
}

export default Component;

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
		"content": `<style>.ppq86hbfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.98 6.61l6.54 4.53q1.23.86 0 1.72l-6.54 4.53q-1.23.86-1.23-.64v-9.5q0-1.5 1.23-.64m9.5 0l6.54 4.53q1.23.86 0 1.72l-6.54 4.53q-1.23.86-1.23-.64v-9.5q0-1.5 1.23-.64");
}
</style><path class="ppq86hbfu"/>`,
		"fallback": "iconoven:fast-forward",
	});
}

export default Component;

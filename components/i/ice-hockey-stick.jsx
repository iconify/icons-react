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
		"content": `<style>.t06up36hr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.5 2.5l-8.25 13m0 0l-1.5 3H3.5q-1 0-1-1q0-2 2.5-2ZM3 21.5h18");
}
</style><path class="t06up36hr"/>`,
		"fallback": "uix:ice-hockey-stick",
	});
}

export default Component;

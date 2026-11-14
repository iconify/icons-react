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
		"content": `<style>.r74n9u2my {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 13h6a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 18v-1.5A3.5 3.5 0 0 1 9 13m.875-2.75h4.25a1.375 1.375 0 0 1 1.375 1.375A1.375 1.375 0 0 1 14.125 13h-4.25A1.375 1.375 0 0 1 8.5 11.625a1.375 1.375 0 0 1 1.375-1.375m-3.375 0a2.75 2.75 0 0 1 2-4.75a3.5 3.5 0 0 1 7 0a2.75 2.75 0 0 1 2 4.75Z");
}
</style><path class="r74n9u2my"/>`,
		"fallback": "uix:hair-mousse",
	});
}

export default Component;

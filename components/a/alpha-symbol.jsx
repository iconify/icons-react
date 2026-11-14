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
		"content": `<style>.biaqn9vuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20.5 4c-2 7-4 16-10 16c-4.5 0-7-3.5-7-8s2.5-8 7-8c6 0 8 9 10 16");
}
</style><path class="biaqn9vuc"/>`,
		"fallback": "uix:alpha-symbol",
	});
}

export default Component;

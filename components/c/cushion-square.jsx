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
		"content": `<style>.ylow44blp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5q8.5 3 17 0q-3 8.5 0 17q-8.5-3-17 0q3-8.5 0-17M12 12h.01");
}
</style><path class="ylow44blp"/>`,
		"fallback": "uix:cushion-square",
	});
}

export default Component;

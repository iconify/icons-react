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
		"content": `<style>.uv4w0gb8v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l9-5.5L21 9q-1.75 2-4.5 0q-2.25 2-4.5 0q-2.25 2-4.5 0Q4.75 11 3 9m0 0v12.5M21 9v12.5M7.5 9v9m9-9v9");
}
</style><path class="uv4w0gb8v"/>`,
		"fallback": "uix:canopy-shelter",
	});
}

export default Component;

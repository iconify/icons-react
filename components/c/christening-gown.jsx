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
		"content": `<style>.jsnj63bau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.5q2.5 2 5 0L16 4l-1 5.5l5 12H4l5-12L8 4Zm-.5 7h6");
}
</style><path class="jsnj63bau"/>`,
		"fallback": "uix:christening-gown",
	});
}

export default Component;

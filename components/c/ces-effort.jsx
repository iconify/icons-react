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
		"content": `<style>.s_s2y_b9v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 16H20.5M3.75 16a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM3.5 7.5l2.25 2.25L10 5.5");
}
</style><path class="s_s2y_b9v"/>`,
		"fallback": "uix-sharp:ces-effort",
	});
}

export default Component;

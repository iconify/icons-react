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
		"content": `<style>.qcye7ub2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 4h5.5A5.25 5.25 0 0 1 20 9.25v5.5A5.25 5.25 0 0 1 14.75 20h-5.5A5.25 5.25 0 0 1 4 14.75v-5.5A5.25 5.25 0 0 1 9.25 4M8 12h8");
}
</style><path class="qcye7ub2i"/>`,
		"fallback": "uix:checkbox-indeterminate",
	});
}

export default Component;

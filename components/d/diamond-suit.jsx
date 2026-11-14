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
		"content": `<style>.q0keskb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.805 5.139l3.85 5.626a2.19 2.19 0 0 1 0 2.47l-3.85 5.626a2.188 2.188 0 0 1-3.61 0l-3.85-5.626a2.19 2.19 0 0 1 0-2.47l3.85-5.626a2.188 2.188 0 0 1 3.61 0");
}
</style><path class="q0keskb7v"/>`,
		"fallback": "uix:diamond-suit",
	});
}

export default Component;

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
		"content": `<style>.iqcxktb2z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a2.75 2.75 0 1 0 5.5 0A2.75 2.75 0 1 0 2 12m7.75-2.75h5v5.5h-5Zm9.5-.25l2.5 5.75h-5ZM3 19h18");
}
</style><path class="iqcxktb2z"/>`,
		"fallback": "uix:count-distinct",
	});
}

export default Component;

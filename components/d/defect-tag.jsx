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
		"content": `<style>.itb49lbec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 12l4-4h6l4 4v7.5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Zm5-4V5.5a2 2 0 0 1 4 0V8M9 18.5l6-6");
}
</style><path class="itb49lbec"/>`,
		"fallback": "uix:defect-tag",
	});
}

export default Component;

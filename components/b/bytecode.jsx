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
		"content": `<style>.mmrb2rbdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5L3 12l3.5 5.5m11-11L21 12l-3.5 5.5M9.5 8h5m-5 4H13m-3.5 4h2");
}
</style><path class="mmrb2rbdd"/>`,
		"fallback": "uix:bytecode",
	});
}

export default Component;

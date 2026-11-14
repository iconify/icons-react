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
		"content": `<style>.owi3x-bdm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 21.5l-5.75-8a7 7 0 1 1 11.5 0Zm0-16v4m0 3.25h.01");
}
</style><path class="owi3x-bdm"/>`,
		"fallback": "uix:incident-pin",
	});
}

export default Component;

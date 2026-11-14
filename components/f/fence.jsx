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
		"content": `<style>.r0b0jvftu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 6v14.5M9.5 6v14.5M15 6v14.5M20.5 6v14.5M2.5 10h19m-19 6h19");
}
</style><path class="r0b0jvftu"/>`,
		"fallback": "uix:fence",
	});
}

export default Component;

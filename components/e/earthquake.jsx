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
		"content": `<style>.s8misjbnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11H6l2.25-5l2.5 11.5l2.75-14L16 15l2-6.5l1.5 2.5h2m-19 9.5h19");
}
</style><path class="s8misjbnw"/>`,
		"fallback": "uix:earthquake",
	});
}

export default Component;

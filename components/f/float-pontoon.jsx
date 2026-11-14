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
		"content": `<style>.n9yugac_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14m-11 0v6m8-6v6m-11.25 0h14.5a2.25 2.25 0 0 1 2.25 2.25A2.25 2.25 0 0 1 19.25 15H4.75a2.25 2.25 0 0 1-2.25-2.25a2.25 2.25 0 0 1 2.25-2.25M2.5 19q2.25-1.75 4.75 0Q9.5 20.75 12 19t4.75 0t4.75 0");
}
</style><path class="n9yugac_y"/>`,
		"fallback": "uix:float-pontoon",
	});
}

export default Component;

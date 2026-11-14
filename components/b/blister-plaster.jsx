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
		"content": `<style>.wq_ohwbfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.293 5.636l7.071 7.071a4 4 0 0 1 0 5.657a4 4 0 0 1-5.657 0l-7.071-7.071a4 4 0 0 1 0-5.657a4 4 0 0 1 5.657 0m1.768 1.768l-5.657 5.657m9.192-2.122l-5.657 5.657M7.75 7.75h.01m8.49 8.5h.01");
}
</style><path class="wq_ohwbfk"/>`,
		"fallback": "uix:blister-plaster",
	});
}

export default Component;

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
		"content": `<style>.qluiv1bst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 5.25l1.5 1.5l2.75-3m-4.25 8l1.5 1.5l2.75-3m-4.25 8l1.5 1.5l2.75-3M11.5 5.5h9.75M11.5 12h9.75m-9.75 6.5h9.75");
}
</style><path class="qluiv1bst"/>`,
		"fallback": "iconoven:checklist",
	});
}

export default Component;

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
		"content": `<style>.fqvmgvdru {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.923 9h8.154a1.729 1.729 0 0 1 1.173 3l-2.687 2.48A1.75 1.75 0 0 0 14 15.766v3.484A1.75 1.75 0 0 1 12.25 21h-.5A1.75 1.75 0 0 1 10 19.25v-3.484a1.75 1.75 0 0 0-.563-1.286L6.75 12a1.729 1.729 0 0 1 1.173-3M7.5 3.5h.01m4.49.75h.01m4.49-.75h.01");
}
</style><path class="fqvmgvdru"/>`,
		"fallback": "uix:data-collection",
	});
}

export default Component;

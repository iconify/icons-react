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
		"content": `<style>.jc-cbvbst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.172 12.172za1.5 1.5 0 0 1 2.121 0l3.535 3.535a1.5 1.5 0 0 1 0 2.121a1.5 1.5 0 0 1-2.121 0l-3.535-3.535a1.5 1.5 0 0 1 0-2.121M6 16.25v5.25M9.294 9.17a5 5 0 0 1 3.536 3.536m-2.695-6.675a8.25 8.25 0 0 1 5.834 5.834m-4.993-8.973a11.5 11.5 0 0 1 8.132 8.132");
}
</style><path class="jc-cbvbst"/>`,
		"fallback": "uix:antenna-gain",
	});
}

export default Component;

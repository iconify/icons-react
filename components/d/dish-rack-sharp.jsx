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
		"content": `<style>.u79ateckn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.25 15l.9-8.85l.091-.905l.909.005H8l1.111-.006L9 6.35L8 15m2.5 0l.9-9.85l.091-.905l.909.005h.85l1.111-.006l-.111 1.106l-1 9.65m2.5 0l.9-8.85l.091-.905l.909.005h.85l1.111-.006L19.5 6.35l-1 8.65M2.75 15h18.5v5.25H2.75v-3Zm3.5 1.9v1.35m5.5-1.35v1.35m5.5-1.35v1.35");
}
</style><path class="u79ateckn"/>`,
		"fallback": "iconoven:dish-rack-sharp",
	});
}

export default Component;

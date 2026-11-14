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
		"content": `<style>.u6i74rb9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 5za2 2 0 0 1 2 2v10a2 2 0 0 1-2 2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2M4.688 8h1.875a2.19 2.19 0 0 1 2.187 2.188v3.625A2.19 2.19 0 0 1 6.563 16H4.688A2.19 2.19 0 0 1 2.5 13.813v-3.625A2.19 2.19 0 0 1 4.688 8M21 2.5v19m-9.5-19v19");
}
</style><path class="u6i74rb9q"/>`,
		"fallback": "uix:distribute-right",
	});
}

export default Component;

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
		"content": `<style>.a_-1qpb7j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18a9 6.5 0 0 1-18 0m7.5-12.5h3a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2a2 2 0 0 1 2-2m1.5 6l1.25 1.75a1.5 1.5 0 1 1-2.5 0Z");
}
</style><path class="a_-1qpb7j"/>`,
		"fallback": "uix:glaze-dip",
	});
}

export default Component;

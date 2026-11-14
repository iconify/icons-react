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
		"content": `<style>.jee0d4b9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h14a2 2 0 0 1 2 2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2a2 2 0 0 1 2-2m3 7h8a2 2 0 0 1 2 2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 7h11a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2a2 2 0 0 1 2-2");
}
</style><path class="jee0d4b9f"/>`,
		"fallback": "uix:frame-auto-layout",
	});
}

export default Component;

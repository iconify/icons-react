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
		"content": `<style>.u87xahb5n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 3.75v3a2 2 0 0 1-2 2h-3m11.5 11.5v-3a2 2 0 0 1 2-2h3m0-6.5h-3a2 2 0 0 1-2-2v-3m-11.5 11.5h3a2 2 0 0 1 2 2v3");
}
</style><path class="u87xahb5n"/>`,
		"fallback": "iconoven:fullscreen-exit",
	});
}

export default Component;

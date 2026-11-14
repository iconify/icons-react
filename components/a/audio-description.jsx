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
		"content": `<style>.ddikykb8i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18L7 6l4 12m-6.5-4h5m4-8H15a6 6 0 0 1 0 12h-1.5Z");
}
</style><path class="ddikykb8i"/>`,
		"fallback": "uix:audio-description",
	});
}

export default Component;

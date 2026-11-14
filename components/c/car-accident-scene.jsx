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
		"content": `<style>.zm35c7ipg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.417 8.595l2.394 6.914a1.5 1.5 0 0 1-1.418 1.991H9.607a1.5 1.5 0 0 1-1.418-1.991l2.394-6.914a1.5 1.5 0 0 1 2.834 0M5 20.5h14M9.75 11h4.5");
}
</style><path class="zm35c7ipg"/>`,
		"fallback": "uix:car-accident-scene",
	});
}

export default Component;

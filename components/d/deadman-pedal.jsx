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
		"content": `<style>.gna9axb2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.602 9.974l6.761-1.812a2 2 0 0 1 2.45 1.414a2 2 0 0 1-1.415 2.45l-6.761 1.812a2 2 0 0 1-2.45-1.414a2 2 0 0 1 1.415-2.45M8.5 20.5L16 13M2.5 20.5h19M4.5 3v8.5M2.25 9.25L4.5 11.5l2.25-2.25");
}
</style><path class="gna9axb2b"/>`,
		"fallback": "uix:deadman-pedal",
	});
}

export default Component;

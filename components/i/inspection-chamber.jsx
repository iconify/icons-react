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
		"content": `<style>.xhz7dry1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 4h12a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-12A1.75 1.75 0 0 1 6 5.75A1.75 1.75 0 0 1 7.75 4M8 7.5v13h11.5v-13M2.5 12H8m-5.5 4H8");
}
</style><path class="xhz7dry1n"/>`,
		"fallback": "uix:inspection-chamber",
	});
}

export default Component;

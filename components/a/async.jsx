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
		"content": `<style>.xp0um-w5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.25H20M17 4l3.25 3.25L17 10.5M2.75 16.75h2.5m3 0H20m-3-3.25l3.25 3.25L17 20");
}
</style><path class="xp0um-w5k"/>`,
		"fallback": "iconoven:async",
	});
}

export default Component;

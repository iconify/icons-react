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
		"content": `<style>.nfnqsccql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4h17v4.5L17 12H7L3.5 8.5Zm6.37 8h4.26a1.5 1.5 0 0 1 1.464 1.825l-.333 1.5a1.5 1.5 0 0 1-1.464 1.175h-3.594a1.5 1.5 0 0 1-1.464-1.175l-.333-1.5A1.5 1.5 0 0 1 9.87 12M12 16.5v5M7.5 7h9");
}
</style><path class="nfnqsccql"/>`,
		"fallback": "uix:adapter-hdmi",
	});
}

export default Component;

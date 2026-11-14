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
		"content": `<style>.ibv36kyym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h13M9 3v3.5m5.5 7.5h-8a3 3 0 0 1-3-3A4.5 4.5 0 0 1 8 6.5h4.5a2 2 0 0 1 2 2zm0-4.5h6l.75-3M9 14v5a1.75 1.75 0 0 1-3.5 0");
}
</style><path class="ibv36kyym"/>`,
		"fallback": "uix:helicopter-winch",
	});
}

export default Component;

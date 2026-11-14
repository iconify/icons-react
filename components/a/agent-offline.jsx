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
		"content": `<style>.pn9khtnth {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.272 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.155 0 2.236.166 3.198.473M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M15 21l5.25-5.25m-4-.25h4.25v4.25");
}
</style><path class="pn9khtnth"/>`,
		"fallback": "uix:agent-offline",
	});
}

export default Component;

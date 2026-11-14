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
		"content": `<style>.j6cusf80j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 12c2.5 0 6 4 6 6.5c0 2-1.5 2.5-3 2.5c-1 0-2-.5-3-.5s-2 .5-3 .5c-1.5 0-3-.5-3-2.5C6 16 9.5 12 12 12M2 12a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0m4.5-6a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0m7 0a2 2.75 0 1 0 4 0a2 2.75 0 1 0-4 0m4.5 6a2 2.5 0 1 0 4 0a2 2.5 0 1 0-4 0");
}
</style><path class="j6cusf80j"/>`,
		"fallback": "uix:dog-paw-print",
	});
}

export default Component;

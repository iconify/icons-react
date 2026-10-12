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
		"content": `<style>.zyz6rccfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 6.25h14.5a1 1 0 0 1 1 1v4.25a4 4 0 0 0-4 4v3.75a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2V15.5a4 4 0 0 0-4-4V7.25a1 1 0 0 1 1-1M3.75 9h16.5");
}
</style><path class="zyz6rccfg"/>`,
		"fallback": "iconoven:diaper-check",
	});
}

export default Component;

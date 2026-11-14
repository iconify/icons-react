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
		"content": `<style>.p_t5mzb6o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12.25 9h7.25a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-7.25a2 2 0 0 1-2-2a2 2 0 0 1 2-2M2.5 15.75h19");
}
</style><path class="p_t5mzb6o"/>`,
		"fallback": "uix:casualty",
	});
}

export default Component;

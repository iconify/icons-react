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
		"content": `<style>.c3tx71bxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7.5v13.75m-3.5 0h7m-10.75-13h14.5m-14.5 0l-2 5.25m2-5.25l2 5.25m12.5-5.25l-2 5.25m2-5.25l2 5.25m-18.5 0h4a2 2 0 0 1-4 0m14.5 0h4a2 2 0 0 1-4 0M12 6.25c0-2 1.25-3.25 3.5-3.5c0 2-1.25 3.25-3.5 3.5");
}
</style><path class="c3tx71bxy"/>`,
		"fallback": "iconoven:fair-trade",
	});
}

export default Component;

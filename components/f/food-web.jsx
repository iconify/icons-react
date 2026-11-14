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
		"content": `<style>.ei66azhel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M2 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m15 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-9.962-4.563l2.424-4.374m-1.699.488l1.699-.488l.487 1.7m7.013 2.674l-2.424-4.374m-.487 1.7l.487-1.7l1.699.488");
}
</style><path class="ei66azhel"/>`,
		"fallback": "uix:food-web",
	});
}

export default Component;

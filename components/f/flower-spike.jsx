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
		"content": `<style>.eziew8b7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6v15.5M10 8l2 1m2 2.25l-2 1m-2 2.25l2 1m2 2.25l-2 1m-1.25-14.5a1.25 1.75 0 1 0 2.5 0a1.25 1.75 0 1 0-2.5 0M6.5 8A1.75 1.75 0 1 0 10 8a1.75 1.75 0 1 0-3.5 0m7.5 3.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M6.5 14.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m7.5 3.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><path class="eziew8b7g"/>`,
		"fallback": "uix:flower-spike",
	});
}

export default Component;

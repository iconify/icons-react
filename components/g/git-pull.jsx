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
		"content": `<style>.enkseuboo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 18h6.25m6.5 0h6.25M12 2.5v9m-5-5l5 5l5-5");
}
</style><path class="enkseuboo"/>`,
		"fallback": "uix:git-pull",
	});
}

export default Component;

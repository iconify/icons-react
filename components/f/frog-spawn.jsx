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
		"content": `<style>.fbac4s80g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0M9 16.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0M7.5 8.5h.01m8.99 0h.01M12 16.25h.01");
}
</style><path class="fbac4s80g"/>`,
		"fallback": "uix:frog-spawn",
	});
}

export default Component;

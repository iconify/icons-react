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
		"content": `<style>.d9o6mnm_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2v5m-6.5 0V14m13-2.5V14m-13-2.5h13m-15.25 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m13 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}
</style><path class="d9o6mnm_z"/>`,
		"fallback": "uix:direct-report",
	});
}

export default Component;

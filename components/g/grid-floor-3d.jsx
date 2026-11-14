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
		"content": `<style>.c0a0zpblu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12.832 6.555l6.296 4.197a1.5 1.5 0 0 1 0 2.496l-6.296 4.197a1.5 1.5 0 0 1-1.664 0l-6.296-4.197a1.5 1.5 0 0 1 0-2.496l6.296-4.197a1.5 1.5 0 0 1 1.664 0M6 10l9 6M9 8l9 6m-3-6l-9 6m12-4l-9 6");
}
</style><path class="c0a0zpblu"/>`,
		"fallback": "uix:grid-floor-3d",
	});
}

export default Component;

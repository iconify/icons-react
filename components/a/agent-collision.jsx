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
		"content": `<style>.j3xz8sb4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1 9.5c0-2.75 1.5-4.25 3.5-4.25s3.5 1.5 3.5 4.25m6-9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1 9.5c0-2.75 1.5-4.25 3.5-4.25s3.5 1.5 3.5 4.25m-18-17H10m-2-2l2 2l-2 2m12.5-2H14m2-2l-2 2l2 2");
}
</style><path class="j3xz8sb4y"/>`,
		"fallback": "uix-sharp:agent-collision",
	});
}

export default Component;

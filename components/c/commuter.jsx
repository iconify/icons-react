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
		"content": `<style>.o91ieq6ad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-4 3.5-6.5 8-6.5q.337 0 .669.019M8 15l4.743 1.581M15.5 15.5h6V21h-6Z");
}
</style><path class="o91ieq6ad"/>`,
		"fallback": "uix-sharp:commuter",
	});
}

export default Component;

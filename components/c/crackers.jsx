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
		"content": `<style>.ysfk4ibyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5a3.5 3.5 0 0 1 5 0a3.5 3.5 0 0 1 5 0a3.5 3.5 0 0 1 5 0a3.5 3.5 0 0 1 0 5a3.5 3.5 0 0 1 0 5a3.5 3.5 0 0 1 0 5a3.5 3.5 0 0 1-5 0a3.5 3.5 0 0 1-5 0a3.5 3.5 0 0 1-5 0a3.5 3.5 0 0 1 0-5a3.5 3.5 0 0 1 0-5a3.5 3.5 0 0 1 0-5ZM9 9h.01M15 9h.01M9 15h.01M15 15h.01");
}
</style><path class="ysfk4ibyt"/>`,
		"fallback": "uix-sharp:crackers",
	});
}

export default Component;

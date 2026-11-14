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
		"content": `<style>.o3aq6xbgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6q9.5-6 19 0M2.75 10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm14 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM10 6.5h4v4h-4ZM7.75 17.25a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm0 0h8.5m-4.25 0v4.25");
}
</style><path class="o3aq6xbgh"/>`,
		"fallback": "uix-sharp:car-dashboard",
	});
}

export default Component;

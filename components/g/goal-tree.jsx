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
		"content": `<style>.spzn35bie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6V7H9ZM2.5 16.75H7v4.5H2.5Zm7.25 0h4.5v4.5h-4.5Zm7.25 0h4.5v4.5H17ZM12 7v9.75m-7.25 0V12h14.5v4.75");
}
</style><path class="spzn35bie"/>`,
		"fallback": "uix-sharp:goal-tree",
	});
}

export default Component;

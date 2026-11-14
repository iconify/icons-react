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
		"content": `<style>.rfl-gv41m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7.5h9v9h-9ZM21 4v16M3 8.75h2.75M2.5 12h3.25M3 15.25h2.75");
}
</style><path class="rfl-gv41m"/>`,
		"fallback": "uix-sharp:inertia",
	});
}

export default Component;

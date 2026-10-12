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
		"content": `<style>.fkyvpbbau {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.6 4.4a2.1 2.1 0 0 1 3 0l1 1a2.1 2.1 0 0 1 0 3L9.1 18.9a2 2 0 0 1-1 .55l-3.6.8l.8-3.6a2 2 0 0 1 .55-1Zm-2.1 2.1l4 4");
}
</style><path class="fkyvpbbau"/>`,
		"fallback": "iconoven:edit",
	});
}

export default Component;

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
		"content": `<style>.mpexh8bzh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 7V4.75a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2V7h1.75a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5ZM12 8.5v12.75m-4 0h8M12 14l-3.5-2.25M12 14l3.5-2.25");
}
</style><path class="mpexh8bzh"/>`,
		"fallback": "iconoven:coat-stand",
	});
}

export default Component;

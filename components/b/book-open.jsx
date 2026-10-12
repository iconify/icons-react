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
		"content": `<style>.ijrvmkb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.25c-1.5-1.35-3.7-2-6.25-2h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2c2.55 0 4.75.65 6.25 2Zm0 0c1.5-1.35 3.7-2 6.25-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2c-2.55 0-4.75.65-6.25 2Z");
}
</style><path class="ijrvmkb9x"/>`,
		"fallback": "iconoven:book-open",
	});
}

export default Component;

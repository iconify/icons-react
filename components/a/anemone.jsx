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
		"content": `<style>.atv66_b1j {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ie-b5fmsf {
  d: path("M14.5 8a3 3 0 1 1 2.25 4a3 3 0 1 1-2.25 4a3 3 0 1 1-5 0a3 3 0 1 1-2.25-4A3 3 0 1 1 9.5 8a3 3 0 1 1 5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ie-b5fmsf"/><path class="atv66_b1j"/></g>`,
		"fallback": "uix-sharp:anemone",
	});
}

export default Component;

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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vpia41zyq {
  d: path("M5.5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm9 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.y_z08rozu {
  d: path("M3 16V7a2 2 0 0 1 2-2h10l6 6v5Zm0-5.5h14");
}
</style><g class="ulnmmdpxh"><path class="y_z08rozu"/><path class="vpia41zyq"/></g>`,
		"fallback": "uix-sharp:field-trip",
	});
}

export default Component;

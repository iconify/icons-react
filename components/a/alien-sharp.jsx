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
		"content": `<style>.e0atk2bwh {
  d: path("M10.7 12.13a2.25 1.25 30 1 0-3.9-2.25a2.25 1.25 30 1 0 3.9 2.25Zm6.5-2.25a2.25 1.25-30 1 0-3.9 2.25a2.25 1.25-30 1 0 3.9-2.25Z");
}

.h22_cmb9f {
  d: path("M12 2.75c4.6 0 8 3.1 8 7.25c0 5-4.6 11.25-8 11.25S4 15 4 10c0-4.15 3.4-7.25 8-7.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="h22_cmb9f"/><path class="e0atk2bwh"/></g>`,
		"fallback": "iconoven:alien-sharp",
	});
}

export default Component;

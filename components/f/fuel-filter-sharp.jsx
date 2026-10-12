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
		"content": `<style>.dr-3_chze {
  d: path("M5.25 6.25h13.5v11.5H5.25zM2.75 12h2.5m13.5 0h2.5");
}

.l-l1wlc6d {
  d: path("M12 8.5c-1.5 1.75-2.75 3.25-2.75 4.75a2.75 2.75 0 0 0 5.5 0c0-1.5-1.25-3-2.75-4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="dr-3_chze"/><path class="l-l1wlc6d"/></g>`,
		"fallback": "iconoven:fuel-filter-sharp",
	});
}

export default Component;

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
		"content": `<style>.fiu6oab0s {
  d: path("M16.75 12a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z");
}

.h4sx7t2ni {
  d: path("M2.75 12h4.5m5 0h4.5m-7 2.5V19M19 8.5l1.4 1.556v3.888L19 15.5");
}

.r9vfbpq0q {
  cx: 9.75px;
  cy: 12px;
  r: 2.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fiu6oab0s"/><circle class="r9vfbpq0q"/><path class="h4sx7t2ni"/></g>`,
		"fallback": "iconoven:horn-sharp",
	});
}

export default Component;

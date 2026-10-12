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
		"content": `<style>.h843t7bio {
  d: path("M8.75 7h6.5l-.45 3.4a2.85 2.85 0 0 1-5.6 0ZM12 13.25v4m-2.25 0h4.5");
}

.p95o4hbbt {
  d: path("M2.75 3.75h18.5v17.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="p95o4hbbt"/><path class="h843t7bio"/></g>`,
		"fallback": "iconoven:fragile-sharp",
	});
}

export default Component;

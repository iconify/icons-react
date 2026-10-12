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
		"content": `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.maw0ff_qb {
  d: path("M10.5 9.75h-1a2.25 2.25 0 0 0 0 4.5h1m6.5-4.5h-1a2.25 2.25 0 0 0 0 4.5h1");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="maw0ff_qb"/></g>`,
		"fallback": "iconoven:closed-captions-sharp",
	});
}

export default Component;

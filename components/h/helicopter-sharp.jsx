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
		"content": `<style>.bvcpzab9v {
  d: path("M11.75 8.75h2.5a6 6 0 0 1 6 6V17H7.75V8.75z");
}

.vzq052bxi {
  d: path("M14.75 8.75v4.5H20m-12.25-.5h-4.5m0-2.25V15m5.5 5h11m-8.25-3v3m5.5-3v3M5.5 4.75h13m-6 0v4");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bvcpzab9v"/><path class="vzq052bxi"/></g>`,
		"fallback": "iconoven:helicopter-sharp",
	});
}

export default Component;

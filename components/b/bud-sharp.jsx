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
		"content": `<style>.auvzy8eas {
  d: path("M12 2.75c2.75 2.75 4.5 5.75 4.5 8.75a4.5 4.5 0 0 1-9 0c0-3 1.75-6 4.5-8.75Z");
}

.p7n4oybap {
  d: path("M7.6 10.25c2 .5 3.5 1.75 4.4 3.5c.9-1.75 2.4-3 4.4-3.5M12 16v5.25m0-.25c.5-2 2.25-3.25 5-3.25c-.5 2-2.25 3.25-5 3.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="auvzy8eas"/><path class="p7n4oybap"/></g>`,
		"fallback": "iconoven:bud-sharp",
	});
}

export default Component;

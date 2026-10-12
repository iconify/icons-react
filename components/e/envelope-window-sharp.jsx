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

.ob-5leb-w {
  d: path("M2.75 7L12 10l9.25-3m-15.5 5.75h8.5v4h-8.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="ob-5leb-w"/></g>`,
		"fallback": "iconoven:envelope-window-sharp",
	});
}

export default Component;

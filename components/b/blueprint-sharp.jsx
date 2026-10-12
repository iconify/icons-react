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
		"content": `<style>.abez8e7ch {
  d: path("M2.75 3.75h18.5v16.5H2.75zm4.25 0v16.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xtt85suoa {
  d: path("M10.25 7.25h7.5v9.5h-7.5Zm0 4.75h4v4.75");
}
</style><g class="x2cwu0gfd"><path class="abez8e7ch"/><path class="xtt85suoa"/></g>`,
		"fallback": "iconoven:blueprint-sharp",
	});
}

export default Component;

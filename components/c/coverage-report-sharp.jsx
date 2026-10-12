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
		"content": `<style>.aoos6bb8w {
  d: path("M14 10V2.75A7.25 7.25 0 0 1 21.25 10Zm-6.75 6.75L9 18.5l3.5-3.5");
}

.gi6z1437d {
  d: path("M11 13h8.25A8.25 8.25 0 1 1 11 4.75Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gi6z1437d"/><path class="aoos6bb8w"/></g>`,
		"fallback": "iconoven:coverage-report-sharp",
	});
}

export default Component;

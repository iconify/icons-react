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
		"content": `<style>.c4lcvgstx {
  d: path("M6.75 11h10.5v5H6.75zM9 13.5h6");
}

.e7x06j1kx {
  d: path("M2.75 6.75v-2h6l2 2.25h10.5v14H2.75v-2Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e7x06j1kx"/><path class="c4lcvgstx"/></g>`,
		"fallback": "iconoven:case-file-sharp",
	});
}

export default Component;

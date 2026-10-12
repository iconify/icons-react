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
		"content": `<style>.b-4y7acsg {
  d: path("M2.75 6.75h16v10.5h-16zm18.5 3.75v3");
}

.pigikqbbw {
  d: path("m11.75 9l-2.5 3.25h4.5l-2.5 3.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="b-4y7acsg"/><path class="pigikqbbw"/></g>`,
		"fallback": "iconoven:battery-charging-sharp",
	});
}

export default Component;

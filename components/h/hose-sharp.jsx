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
		"content": `<style>.cdf13kz-j {
  d: path("M14.5 9.75a2.5 2.5 0 1 1-5 0a2.5 2.5 0 1 1 5 0m-7 5.5l-2 6m11-6l2 6m-14.25 0h3m10 0h3M19 9.75h2.25");
}

.o8w52mbli {
  cx: 12px;
  cy: 9.75px;
  r: 7px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="o8w52mbli"/><path class="cdf13kz-j"/></g>`,
		"fallback": "iconoven:hose-sharp",
	});
}

export default Component;

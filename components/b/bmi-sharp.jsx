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
		"content": `<style>.r34d66ayj {
  d: path("M8.75 21.25V17.5a3.25 3.25 0 0 1 6.5 0v3.75Zm-6-6.25a9.25 9.25 0 0 1 3.06-6.87m2.72-1.71a9.25 9.25 0 0 1 6.94 0m2.72 1.71A9.25 9.25 0 0 1 21.25 15");
}

.w0dy7ackv {
  cx: 12px;
  cy: 10.5px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="w0dy7ackv"/><path class="r34d66ayj"/></g>`,
		"fallback": "iconoven:bmi-sharp",
	});
}

export default Component;

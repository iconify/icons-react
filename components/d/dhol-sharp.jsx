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
		"content": `<style>.haejalu5o {
  d: path("M6 6.5h12a2.25 5.5 0 0 1 0 11H6a2.25 5.5 0 0 0 0-11Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zmuvudboi {
  d: path("M3.75 12a2.25 5.5 0 1 0 4.5 0a2.25 5.5 0 1 0-4.5 0Zm6.5-4l2.5 8l2.5-8l2.5 8M8 6.5c1-3.75 7-3.75 8 0");
}
</style><g class="x2cwu0gfd"><path class="haejalu5o"/><path class="zmuvudboi"/></g>`,
		"fallback": "iconoven:dhol-sharp",
	});
}

export default Component;

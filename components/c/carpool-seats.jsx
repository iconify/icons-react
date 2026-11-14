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
		"content": `<style>.hzcxydblm {
  d: path("M4.75 17a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm10 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM7 9a1.75 1.75 0 1 0 3.5 0A1.75 1.75 0 1 0 7 9Zm6.5 0A1.75 1.75 0 1 0 17 9a1.75 1.75 0 1 0-3.5 0Z");
}

.mmkk13abs {
  d: path("M2.5 16.5V13a1 1 0 0 1 1-1L6 4.5h12l2.5 7.5a1 1 0 0 1 1 1v3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mmkk13abs"/><path class="hzcxydblm"/></g>`,
		"fallback": "uix-sharp:carpool-seats",
	});
}

export default Component;

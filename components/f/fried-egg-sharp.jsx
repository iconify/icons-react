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
		"content": `<style>.m0r2x72bn {
  d: path("M12.5 3.5c3 0 4.5 2 5.75 3.25S21 10 21 12.25c0 3.75-3.25 7.25-8 7.25c-2 0-3.25 1.25-5.25 1.25c-2.5 0-4.25-1.75-4.25-4.5c0-2 .75-3 .75-5.25c0-4 4-7.5 8.25-7.5Z");
}

.m10ymsugb {
  cx: 12px;
  cy: 12px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m0r2x72bn"/><circle class="m10ymsugb"/></g>`,
		"fallback": "iconoven:fried-egg-sharp",
	});
}

export default Component;

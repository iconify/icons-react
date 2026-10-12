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
		"content": `<style>.n4z_51bpm {
  d: path("M5 3.5c4.5 1 9.5 1 14 0l-1 8.75l1 9c-4.5-1-9.5-1-14 0l1-9Z");
}

.r1z5s1m9e {
  cx: 12px;
  cy: 13.75px;
  r: 3.25px;
}

.tz2ywz0sh {
  d: path("M12 11.75c.9.9.9 3.1 0 4c-.9-.9-.9-3.1 0-4Z");
}

.vnprk6bnv {
  d: path("M7 6.5c3.25.5 6.75.5 10 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="n4z_51bpm"/><path class="vnprk6bnv"/><circle class="r1z5s1m9e"/><path class="tz2ywz0sh"/></g>`,
		"fallback": "iconoven:feed-bag-sharp",
	});
}

export default Component;

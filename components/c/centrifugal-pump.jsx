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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hucymkb5k {
  d: path("M5 13.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.uz3c2ub6a {
  d: path("M13.5 8V3h4v8M4 21.5h14m-9-8a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="hucymkb5k"/><path class="uz3c2ub6a"/></g>`,
		"fallback": "uix:centrifugal-pump",
	});
}

export default Component;

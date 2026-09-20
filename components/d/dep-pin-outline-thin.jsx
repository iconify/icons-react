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
		"content": `<style>.fwgh9qb5h {
  d: path("M14.5 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.h18rabcld {
  d: path("M3 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nwn4xu84s {
  d: path("M17.5 14v4.5");
}
</style><g class="hntgybcog"><path class="h18rabcld"/><path class="fwgh9qb5h"/><path class="nwn4xu84s"/></g>`,
		"fallback": "iconmind:dep-pin-outline-thin",
	});
}

export default Component;

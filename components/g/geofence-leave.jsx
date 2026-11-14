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
		"content": `<style>.b3rlp-kbw {
  d: path("M16.495 15.75a7.5 7.5 0 1 1 0-7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jdz3pub8o {
  d: path("M10 15.5s-2.5-2-2.5-4.25a2.5 2.5 0 0 1 5 0c0 2.25-2.5 4.25-2.5 4.25m5-3.5h6.5m-2-2l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="b3rlp-kbw"/><path class="jdz3pub8o"/></g>`,
		"fallback": "uix:geofence-leave",
	});
}

export default Component;

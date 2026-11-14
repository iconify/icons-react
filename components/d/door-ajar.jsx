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
		"content": `<style>.en1atn9hm {
  d: path("M5 21.5V4a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 19 4v17.5m-16.5 0h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.swos-x5rt {
  d: path("m6.747 4.291l6 1A1.5 1.5 0 0 1 14 6.771v11.958a1.5 1.5 0 0 1-1.253 1.48l-6 1A1.5 1.5 0 0 1 5 19.729V5.771a1.5 1.5 0 0 1 1.747-1.48M11.5 13h.01");
}
</style><g class="hntgybcog"><path class="en1atn9hm"/><path class="swos-x5rt"/></g>`,
		"fallback": "uix:door-ajar",
	});
}

export default Component;

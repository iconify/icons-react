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
		"content": `<style>.fymtathnt {
  d: path("M8.25 10a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ns0c7bbfw {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v4.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 12.125v-4.25A4.375 4.375 0 0 1 6.875 3.5M12 16.5v4m-4 0h8");
}

.whlonibkq {
  d: path("M12 6.25V10");
}

.wtxn3qbfy {
  fill: currentColor;
  d: path("M8.25 10a3.75 3.75 0 0 0 7.5 0Z");
}
</style><g class="hntgybcog"><path class="ns0c7bbfw"/><path class="fymtathnt"/><path class="wtxn3qbfy"/><path class="whlonibkq"/></g>`,
		"fallback": "uix:dark-web-monitor",
	});
}

export default Component;

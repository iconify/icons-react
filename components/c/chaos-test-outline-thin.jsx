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

.qmp10g8yw {
  d: path("M13 11.5 10.5 14H13l-2.5 2.5");
}

.sgjb9gifn {
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
}
</style><g class="hntgybcog"><path class="sgjb9gifn"/><path class="qmp10g8yw"/></g>`,
		"fallback": "iconmind:chaos-test-outline-thin",
	});
}

export default Component;

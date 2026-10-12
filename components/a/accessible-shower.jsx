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
		"content": `<style>.c57dijbcm {
  d: path("M9.5 9.5a3.75 3.75 0 0 1 7.5 0Zm.25 3V14m3.5-1.5V14m3.5-1.5V14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vlpz9peuq {
  d: path("M4.75 21.25v-16a2.5 2.5 0 0 1 2.5-2.5h3.5a2.5 2.5 0 0 1 2.5 2.5v.5");
}
</style><g class="hntgybcog"><path class="vlpz9peuq"/><path class="c57dijbcm"/></g>`,
		"fallback": "iconoven:accessible-shower",
	});
}

export default Component;

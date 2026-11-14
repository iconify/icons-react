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
		"content": `<style>.eeq9rwbts {
  d: path("M6 21.5c-2-4.5-1-10 4-12v-4L11.5 3L13 5h2l1.5-2l1 3c1 2 0 4.5-2.5 5c1.5 3 2 7 1 10.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.swehgimzk {
  d: path("M6 21.5h13a1.75 1.75 0 0 0 0-3.5M14.5 7.5h.01");
}
</style><g class="hntgybcog"><path class="eeq9rwbts"/><path class="swehgimzk"/></g>`,
		"fallback": "uix:cat-sitting",
	});
}

export default Component;

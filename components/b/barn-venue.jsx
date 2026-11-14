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
		"content": `<style>.g1iijbccu {
  d: path("M3 21.5V11l2.5-5L12 2.5L18.5 6l2.5 5v10.5Z");
}

.hm5i0fbmn {
  d: path("M7.5 21.5v-9h9v9m-9-9l9 9m0-9l-9 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g1iijbccu"/><path class="hm5i0fbmn"/></g>`,
		"fallback": "uix:barn-venue",
	});
}

export default Component;

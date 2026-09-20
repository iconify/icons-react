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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jn24arf4i {
  d: path("M8 10h6");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.w8g3vrtdm {
  d: path("M10 14h6");
}
</style><g class="hntgybcog"><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="jn24arf4i"/><path class="w8g3vrtdm"/></g>`,
		"fallback": "iconmind:duplication-check-outline-thin",
	});
}

export default Component;

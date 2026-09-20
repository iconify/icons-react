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
		"content": `<style>.f4yp5uw0u {
  d: path("M14 18.5a2 2 0 0 1 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlfjgzbqx {
  d: path("M9 9h6");
}

.k70w93buq {
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
}

.zka_zabrc {
  d: path("M9 13h6");
}
</style><g class="hntgybcog"><path class="k70w93buq"/><path class="f4yp5uw0u"/><path class="jlfjgzbqx"/><path class="zka_zabrc"/></g>`,
		"fallback": "iconmind:alert-dedupe-outline-thin",
	});
}

export default Component;

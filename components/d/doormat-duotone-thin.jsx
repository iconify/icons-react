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

.l0v-b4kbr {
  d: path("M8 12h8");
}

.obcmadc5g {
  fill: currentColor;
  d: path("m3 16 7 -7h4l7 7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.okiuenbyh {
  d: path("m3 16 7 -7h4l7 7Z");
}
</style><g class="hntgybcog"><path class="obcmadc5g"/><path class="okiuenbyh"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:doormat-duotone-thin",
	});
}

export default Component;

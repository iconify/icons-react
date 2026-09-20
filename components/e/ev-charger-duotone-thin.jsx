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
		"content": `<style>.awt7oi67r {
  d: path("M4 21V5l3 -3h6l3 3v16Z");
}

.c3bjgh0gv {
  d: path("M16 9h3l2 2v6");
}

.h6fchdcuh {
  fill: currentColor;
  d: path("M4 21V5l3 -3h6l3 3v16Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wtf6_93on {
  d: path("m13 6 -2.5 2.5H13L10.5 11");
}
</style><g class="hntgybcog"><path class="h6fchdcuh"/><path class="awt7oi67r"/><path class="wtf6_93on"/><path class="c3bjgh0gv"/></g>`,
		"fallback": "iconmind:ev-charger-duotone-thin",
	});
}

export default Component;

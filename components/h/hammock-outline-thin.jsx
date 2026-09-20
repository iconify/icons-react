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
		"content": `<style>.auc4o2swl {
  d: path("M4 8c0 8 16 8 16 0");
}

.bu35rpbki {
  d: path("M4 12c0 7 16 7 16 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3uz_wvor {
  d: path("M4 6v15");
}

.vvv_0v-7b {
  d: path("M20 6v15");
}
</style><g class="hntgybcog"><path class="r3uz_wvor"/><path class="vvv_0v-7b"/><path class="auc4o2swl"/><path class="bu35rpbki"/></g>`,
		"fallback": "iconmind:hammock-outline-thin",
	});
}

export default Component;

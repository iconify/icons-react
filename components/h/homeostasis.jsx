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
		"content": `<style>.eret2jbmb {
  d: path("M14.736 4.482a8 8 0 0 1 0 15.036");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yym_uyaih {
  d: path("m16 16.75l-1.25 2.75l2.75 1.25m-8.236-1.232a8 8 0 0 1 0-15.036");
}

.z4a9ptbec {
  d: path("m8 16.75l1.25 2.75l-2.75 1.25M8 12h8");
}
</style><g class="hntgybcog"><path class="eret2jbmb"/><path class="yym_uyaih"/><path class="z4a9ptbec"/></g>`,
		"fallback": "uix:homeostasis",
	});
}

export default Component;

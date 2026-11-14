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

.ojv7dhbgt {
  d: path("m2.5 9.5l19-4.5m-17 4v12.5h15v-16");
}

.q6ks_0b9n {
  d: path("M9 12h4a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 20v-6.5A1.5 1.5 0 0 1 9 12m-1.5 2.5h7m-7 4.5h7m-7 0l7-4.5");
}
</style><g class="hntgybcog"><path class="ojv7dhbgt"/><path class="q6ks_0b9n"/></g>`,
		"fallback": "uix:garden-shed",
	});
}

export default Component;

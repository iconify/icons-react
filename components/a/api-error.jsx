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

.hp6xhvbxo {
  d: path("M13.255 17.156L10 19l-7.5-4.25v-8.5L10 2l7.5 4.25v7.28");
}

.izmkdabrt {
  d: path("M2.5 6.25L10 10.5l7.5-4.25M10 10.5V19m5.5-3.5l6 6m0-6l-6 6");
}
</style><g class="hntgybcog"><path class="hp6xhvbxo"/><path class="izmkdabrt"/></g>`,
		"fallback": "uix:api-error",
	});
}

export default Component;

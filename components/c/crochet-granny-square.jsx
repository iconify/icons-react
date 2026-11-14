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
		"content": `<style>.g3c829x5m {
  d: path("M4.5 4.5a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 5 0a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0-5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zal8n4bld {
  d: path("M9.75 8h4.5A1.75 1.75 0 0 1 16 9.75v4.5A1.75 1.75 0 0 1 14.25 16h-4.5A1.75 1.75 0 0 1 8 14.25v-4.5A1.75 1.75 0 0 1 9.75 8");
}
</style><g class="hntgybcog"><path class="g3c829x5m"/><path class="zal8n4bld"/></g>`,
		"fallback": "uix:crochet-granny-square",
	});
}

export default Component;

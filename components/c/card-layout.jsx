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
		"content": `<style>.g6ctus9qt {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.5px;
}

.haqkvfj7d {
  d: path("M6.25 2.75h11.5a2.5 2.5 0 0 1 2.5 2.5v6H3.75v-6a2.5 2.5 0 0 1 2.5-2.5m.75 12h10M7 18h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="g6ctus9qt"/><path class="haqkvfj7d"/></g>`,
		"fallback": "iconoven:card-layout",
	});
}

export default Component;

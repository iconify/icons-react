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
		"content": `<style>.b54ou8i9p {
  fill: currentColor;
  d: path("M4 17a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.g2z0nkbdi {
  d: path("M5 8h14m-3-3l3 3l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m6-qeyb5m {
  d: path("M2.5 17h19");
}
</style><g class="hntgybcog"><path class="m6-qeyb5m"/><path class="b54ou8i9p"/><path class="g2z0nkbdi"/></g>`,
		"fallback": "uix:electron-flow",
	});
}

export default Component;

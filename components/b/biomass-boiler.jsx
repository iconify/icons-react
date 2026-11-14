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
		"content": `<style>.bp71qgbby {
  d: path("M17 6.5h1a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5h-1a3.5 3.5 0 0 1-3.5-3.5v-8A3.5 3.5 0 0 1 17 6.5m.5 0V3m-2 0h4m-17 6l1 8.5h10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sunsaubkh {
  d: path("M5.5 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m3 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="bp71qgbby"/><path class="sunsaubkh"/></g>`,
		"fallback": "uix:biomass-boiler",
	});
}

export default Component;

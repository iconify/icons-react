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

.lvptizjsv {
  d: path("M6 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-6 5v5m-2-1.5h4m6-3.5v5m-2-3.5h4");
}

.pwkp65gco {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 6 3");
}
</style><g class="hntgybcog"><path class="pwkp65gco"/><path class="lvptizjsv"/></g>`,
		"fallback": "uix:broadcast-mixer",
	});
}

export default Component;

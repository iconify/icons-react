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
		"content": `<style>.ap5fb8bfb {
  fill: currentColor;
  d: path("M5.75 10.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5-2.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5 2.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pm-67_bax {
  d: path("M2.5 12a9.5 8 0 1 0 19 0a9.5 8 0 1 0-19 0");
}

.sia237bui {
  d: path("M8.25 15.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.x5ki3dbml {
  d: path("M14.5 19.75Q15 15 21 14.5");
}
</style><g class="hntgybcog"><path class="pm-67_bax"/><path class="sia237bui"/><path class="ap5fb8bfb"/><path class="x5ki3dbml"/></g>`,
		"fallback": "uix:disposable-palette",
	});
}

export default Component;

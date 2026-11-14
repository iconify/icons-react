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
		"content": `<style>.fqn5-wbja {
  fill: currentColor;
  d: path("M16.5 17za.75.75 0 0 1 .75.75a.75.75 0 0 1-.75.75a.75.75 0 0 1-.75-.75a.75.75 0 0 1 .75-.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oz8g5dx8x {
  d: path("M12.072 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c.753 0 1.475.071 2.153.205M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m9.5 8.5h3.25A1.75 1.75 0 0 1 21 17.25v1A1.75 1.75 0 0 1 19.25 20H16a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 16 15.5m5.75 1.5v1.5");
}
</style><g class="hntgybcog"><path class="oz8g5dx8x"/><path class="fqn5-wbja"/></g>`,
		"fallback": "uix:fatigue",
	});
}

export default Component;

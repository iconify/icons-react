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
		"content": `<style>.dh-9us5ea {
  d: path("M2.5 17.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m12.5 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M11.5 4.5H13v7.75h8.5V7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kjp1db1zf {
  d: path("M5.25 17.75H9.5l3.5-5.5m-3.5 5.5l-2-7.25m-1.5 0h3");
}
</style><g class="hntgybcog"><path class="dh-9us5ea"/><path class="kjp1db1zf"/></g>`,
		"fallback": "uix:front-loader-cargo-bike",
	});
}

export default Component;

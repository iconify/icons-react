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

.pg4535b8p {
  d: path("M7 4.5h10A3.5 3.5 0 0 1 20.5 8v9.5A3.5 3.5 0 0 1 17 21H7a3.5 3.5 0 0 1-3.5-3.5V8A3.5 3.5 0 0 1 7 4.5m1-2V6m8-3.5V6M3.5 8.5h17");
}

.v4g2ogbbj {
  d: path("m9.5 18.5l3.75-4.25a1.75 1.75 0 1 0-2.5 0l3.75 4.25");
}
</style><g class="hntgybcog"><path class="pg4535b8p"/><path class="v4g2ogbbj"/></g>`,
		"fallback": "uix:awareness-month",
	});
}

export default Component;

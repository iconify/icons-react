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
		"content": `<style>.dm_wopyrf {
  d: path("M16.5 17.5v-1a1.5 1.5 0 0 1 3 0v1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q5sr_4bng {
  d: path("M6.75 3h10.5A1.75 1.75 0 0 1 19 4.75v5.75a1.75 1.75 0 0 1-1.75 1.75H14A1.75 1.75 0 0 0 12.25 14v4.043a1.21 1.21 0 0 1-1.75 1.082l-.941-.471a1.75 1.75 0 0 0-1.607.021l-1.077.575A1.275 1.275 0 0 1 5 18.125V4.75A1.75 1.75 0 0 1 6.75 3M8.5 6.5h7m-7 3h7m1.25 8h2.5A1.75 1.75 0 0 1 21 19.25v.5a1.75 1.75 0 0 1-1.75 1.75h-2.5A1.75 1.75 0 0 1 15 19.75v-.5a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="q5sr_4bng"/><path class="dm_wopyrf"/></g>`,
		"fallback": "uix:expense-fixed",
	});
}

export default Component;

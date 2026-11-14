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
		"content": `<style>.afhlh5wbv {
  d: path("M9.25 15.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zh69_0rsg {
  d: path("M12 2.5v2M9 10L8 7.75l4-3.25l4 3.25L15 10M4 14v5.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V14");
}
</style><g class="hntgybcog"><path class="zh69_0rsg"/><path class="afhlh5wbv"/></g>`,
		"fallback": "uix:claw-machine",
	});
}

export default Component;

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

.hpfm1rbeb {
  d: path("M2.5 14.75a9.5 5.25 0 1 0 19 0a9.5 5.25 0 1 0-19 0");
}

.l-s06p1sb {
  d: path("M12.75 6.25a1 1 0 1 1 .5 1.5A1 1 0 1 1 12 8.5a1 1 0 1 1-1.25-.75a1 1 0 1 1 .5-1.5a1 1 0 1 1 1.5 0M5.25 8.5a.75.75 0 1 1 .5 1a.75.75 0 1 1-1 .75a.75.75 0 1 1-1-.75a.75.75 0 1 1 .5-1a.75.75 0 1 1 1 0m14.5 0a.75.75 0 1 1 .5 1a.75.75 0 1 1-1 .75a.75.75 0 1 1-1-.75a.75.75 0 1 1 .5-1a.75.75 0 1 1 1 0");
}
</style><g class="hntgybcog"><path class="hpfm1rbeb"/><path class="l-s06p1sb"/></g>`,
		"fallback": "uix:flower-crown",
	});
}

export default Component;

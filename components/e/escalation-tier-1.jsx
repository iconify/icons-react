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
		"content": `<style>.eypwsxb4m {
  d: path("M8.5 21.5V12h6V7.5h6v14Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j-r5ud2jy {
  fill: currentColor;
  d: path("M4 16.5h3A1.5 1.5 0 0 1 8.5 18v2A1.5 1.5 0 0 1 7 21.5H4A1.5 1.5 0 0 1 2.5 20v-2A1.5 1.5 0 0 1 4 16.5");
}

.v6zjf47kh {
  d: path("M3.5 10.5L10 4M6.5 4H10v3.5");
}
</style><g class="hntgybcog"><path class="eypwsxb4m"/><path class="j-r5ud2jy"/><path class="v6zjf47kh"/></g>`,
		"fallback": "uix:escalation-tier-1",
	});
}

export default Component;

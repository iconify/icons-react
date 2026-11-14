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

.ts43zps6m {
  d: path("M11.5 7.5h1A1.5 1.5 0 0 1 14 9v.5a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 9.5V9a1.5 1.5 0 0 1 1.5-1.5m-1.5 13v-4h4v4");
}

.yh7no9bjz {
  d: path("m4.422 9.714l5.875-5.011a2.625 2.625 0 0 1 3.406 0l5.875 5.011a2.63 2.63 0 0 1 .922 1.997v6.164a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 17.875v-6.164a2.63 2.63 0 0 1 .922-1.997M3.5 13.5h17");
}
</style><g class="hntgybcog"><path class="yh7no9bjz"/><path class="ts43zps6m"/></g>`,
		"fallback": "uix:dollhouse",
	});
}

export default Component;

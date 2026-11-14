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

.o-i6f2xkh {
  d: path("M11.75 16.75h.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5");
}

.y7tr8ydyq {
  fill: currentColor;
  d: path("M9.825 10.25h4.35a1.178 1.178 0 0 1 .95 1.875l-.926 1.262A1.5 1.5 0 0 1 12.99 14h-1.98a1.5 1.5 0 0 1-1.209-.613l-.926-1.262a1.178 1.178 0 0 1 .95-1.875");
}

.zsi2rhbot {
  d: path("M5 3.5h14a1.25 1.25 0 0 1 1 2l-1.05 1.4a1.5 1.5 0 0 1-1.2.6H6.25a1.5 1.5 0 0 1-1.2-.6L4 5.5a1.25 1.25 0 0 1 1-2");
}
</style><g class="hntgybcog"><path class="zsi2rhbot"/><path class="y7tr8ydyq"/><path class="o-i6f2xkh"/></g>`,
		"fallback": "uix:funnel-middle",
	});
}

export default Component;

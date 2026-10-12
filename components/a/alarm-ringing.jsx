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

.qxj3vizju {
  d: path("m4 7.25l3-2.5m13 2.5l-3-2.5m-9.25 14l-1.25 1.5m9.75-1.5l1.25 1.5M2.75 12v3.5m18.5-3.5v3.5M12 10.25v3l1.75 1.25");
}

.x7lqlmblc {
  cx: 12px;
  cy: 13.25px;
  r: 6.25px;
}
</style><g class="hntgybcog"><circle class="x7lqlmblc"/><path class="qxj3vizju"/></g>`,
		"fallback": "iconoven:alarm-ringing",
	});
}

export default Component;

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
		"content": `<style>.dh-xp411l {
  cx: 12px;
  cy: 9.5px;
  r: 6.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.va-vmgbvf {
  d: path("m12 9.5l-1.87-3.25a2.25 2.25 0 0 1 3.75 0Zm0 0h3.75a2.25 2.25 0 0 1-1.87 3.25Zm0 0l-1.87 3.25A2.25 2.25 0 0 1 8.25 9.5Zm0 6.75v5m-4 0h8");
}
</style><g class="hntgybcog"><circle class="dh-xp411l"/><path class="va-vmgbvf"/></g>`,
		"fallback": "iconoven:fan",
	});
}

export default Component;

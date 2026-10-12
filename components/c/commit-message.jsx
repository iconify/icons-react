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

.qy4e2ebar {
  cx: 12px;
  cy: 12px;
  r: 4.25px;
}

.wmmvndbva {
  d: path("M2.75 12h3.5m11.5 0h3.5");
}
</style><g class="hntgybcog"><circle class="qy4e2ebar"/><path class="wmmvndbva"/></g>`,
		"fallback": "iconoven:commit-message",
	});
}

export default Component;

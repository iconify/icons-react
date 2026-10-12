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

.nr14crr6d {
  cx: 7.75px;
  cy: 16.25px;
  r: 5px;
}

.pvvit4b0i {
  d: path("m11.3 12.7l8.45-8.45M17 7l2.5 2.5m.25-5.25l1.5 1.5M7.75 13.5q.33 2.42 2.75 2.75q-2.42.33-2.75 2.75q-.33-2.42-2.75-2.75q2.42-.33 2.75-2.75");
}
</style><g class="hntgybcog"><circle class="nr14crr6d"/><path class="pvvit4b0i"/></g>`,
		"fallback": "iconoven:api-key-ai",
	});
}

export default Component;

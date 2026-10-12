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

.oeertebhf {
  d: path("M15.5 21.25h5a.75.75 0 0 0 .75-.75c0-2.6-1.5-4.5-3.25-4.5s-3.25 1.9-3.25 4.5a.75.75 0 0 0 .75.75m-2.25-17.5l-2.5 5h2.5l-2.5 5");
}

.qfz3y5phf {
  cx: 18px;
  cy: 10.25px;
  r: 2.25px;
}

.x_v1iebfy {
  cx: 6px;
  cy: 10.25px;
  r: 2.25px;
}

.x10pqqb5f {
  d: path("M3.5 21.25h5a.75.75 0 0 0 .75-.75c0-2.6-1.5-4.5-3.25-4.5s-3.25 1.9-3.25 4.5a.75.75 0 0 0 .75.75");
}
</style><g class="hntgybcog"><circle class="x_v1iebfy"/><path class="x10pqqb5f"/><circle class="qfz3y5phf"/><path class="oeertebhf"/></g>`,
		"fallback": "iconoven:competitor-watch",
	});
}

export default Component;

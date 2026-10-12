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
		"content": `<style>.byxlqys3u {
  d: path("M2.75 16.25a9.25 9.25 0 0 1 18.5 0v2.25a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nz62cmbrj {
  d: path("m12.86 15.02l1.58-2.25");
}

.s8tk7gw-f {
  d: path("M5.25 16.25a6.75 6.75 0 0 1 13.5 0");
}

.vtw09psrf {
  cx: 12px;
  cy: 16.25px;
  r: 1.5px;
}
</style><g class="hntgybcog"><path class="byxlqys3u"/><path class="s8tk7gw-f"/><circle class="vtw09psrf"/><path class="nz62cmbrj"/></g>`,
		"fallback": "iconoven:gauge-meter",
	});
}

export default Component;

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
		"content": `<style>.fnqdxbb0f {
  d: path("M12 3.5V8m0 4.5V17m-6.75-6.75h4.5m4.5 0h4.5M7.25 5.5l3.1 3.1m3.3 3.3l3.1 3.1m0-9.5l-3.1 3.1m-3.3 3.3L7.25 15");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j2auxujcv {
  cx: 12px;
  cy: 10.25px;
  r: 7.5px;
}

.l0wii60de {
  d: path("m9.25 17.25l-2 4m7.5-4l2 4M5 21.25h14");
}

.leayzzghm {
  cx: 12px;
  cy: 10.25px;
  r: 1.5px;
}
</style><g class="hntgybcog"><circle class="j2auxujcv"/><path class="fnqdxbb0f"/><circle class="leayzzghm"/><path class="l0wii60de"/></g>`,
		"fallback": "iconoven:ferris-wheel",
	});
}

export default Component;

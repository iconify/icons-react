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
		"content": `<style>.bjel46bwo {
  d: path("M13.25 18.25h1.5m2.25 0h1.5m-1-12.75v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.i3a8og2pw {
  width: 11px;
  height: 5.75px;
  x: 10.25px;
  y: 15.5px;
  rx: 1px;
}

.qed6m1bau {
  d: path("M5.5 21.25V2.75M2.75 5.5h18.5M3.5 21.25h4");
}

.rdkisebvg {
  width: 4px;
  height: 3px;
  x: 15.5px;
  y: 9.5px;
  rx: 0.5px;
}
</style><g class="hntgybcog"><path class="qed6m1bau"/><rect class="i3a8og2pw"/><path class="bjel46bwo"/><rect class="rdkisebvg"/></g>`,
		"fallback": "iconoven:crane-building",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.brxpxfbzn {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  rx: 4px;
  ry: 4px;
}

.bybjau59l {
  cx: 32.5px;
  cy: 11px;
  r: 2.5px;
}

.i3oh-iaco {
  d: path("M24.539 34.025C25.329 35.21 26.71 36 28.883 36h.395a5.31 5.31 0 0 0 5.334-5.333v-5.334M14.28 22.2l4-2.2m0 0v16");
}

.m1bwskfbe {
  cx: 29.279px;
  cy: 25.333px;
  r: 5.333px;
}

.se87bac5g {
  cx: 15.5px;
  cy: 11px;
  r: 2.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="m1bwskfbe"/><path class="i3oh-iaco"/></g><g class="y9tr6bcfx"><circle class="bybjau59l"/><circle class="se87bac5g"/><rect class="brxpxfbzn"/></g>`,
		"fallback": "arcticons:calendar-19",
	});
}

export default Component;

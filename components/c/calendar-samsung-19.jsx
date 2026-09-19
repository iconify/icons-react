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
		"content": `<style>.i3oh-iaco {
  d: path("M24.539 34.025C25.329 35.21 26.71 36 28.883 36h.395a5.31 5.31 0 0 0 5.334-5.333v-5.334M14.28 22.2l4-2.2m0 0v16");
}

.kzykk8swa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-4v1a3.5 3.5 0 1 1-7 0v-1h-8v1a3.5 3.5 0 1 1-7 0v-1h-3a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.m1bwskfbe {
  cx: 29.279px;
  cy: 25.333px;
  r: 5.333px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="m1bwskfbe"/><path class="i3oh-iaco"/></g><path class="kzykk8swa"/>`,
		"fallback": "arcticons:calendar-samsung-19",
	});
}

export default Component;

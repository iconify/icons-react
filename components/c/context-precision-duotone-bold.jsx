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
		"content": `<style>.dahw1rbat {
  d: path("M18 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.dhm9wy0nm {
  d: path("M3 5h10");
}

.dpra8nb8c {
  fill: currentColor;
  d: path("M16 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e6q34etyy {
  d: path("M16 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pt0xyi7kd {
  d: path("M3 17h10");
}

.rpvjsebmn {
  fill: currentColor;
  d: path("M18 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wy8f0maog {
  d: path("M3 11h10");
}
</style><g class="s0phu2bbs"><path class="dpra8nb8c"/><path class="rpvjsebmn"/><path class="dhm9wy0nm"/><path class="wy8f0maog"/><path class="pt0xyi7kd"/><path class="e6q34etyy"/><path class="dahw1rbat"/></g>`,
		"fallback": "iconmind:context-precision-duotone-bold",
	});
}

export default Component;

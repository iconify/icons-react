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
		"content": `<style>.gcyfrccfd {
  d: path("m12 8 3 3a4.5 4.5 0 1 1 -6 0Z");
}

.kbaghgqhh {
  fill: currentColor;
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l1jjkky7x {
  d: path("M8 18h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t8mk4n5yw {
  fill: currentColor;
  d: path("m12 8 3 3a4.5 4.5 0 1 1 -6 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zva0qcbrg {
  d: path("M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="kbaghgqhh"/><path class="t8mk4n5yw"/><path class="zva0qcbrg"/><path class="gcyfrccfd"/><path class="l1jjkky7x"/></g>`,
		"fallback": "iconmind:dehumidifier-duotone-bold",
	});
}

export default Component;

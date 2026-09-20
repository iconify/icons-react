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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.dktry7bqc {
  fill: currentColor;
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i7lhwccgf {
  d: path("M12 3a4 9 0 1 1 0 18 4 9 0 1 1 0 -18");
}

.qwxag6a5s {
  fill: currentColor;
  d: path("M3 12a9 4 0 1 1 18 0 9 4 0 1 1 -18 0");
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

.w_5e6-a2z {
  fill: currentColor;
  d: path("M12 3a4 9 0 1 1 0 18 4 9 0 1 1 0 -18");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.zor1fdc8q {
  d: path("M3 12a9 4 0 1 1 18 0 9 4 0 1 1 -18 0");
}
</style><g class="s0phu2bbs"><path class="dktry7bqc"/><path class="qwxag6a5s"/><path class="w_5e6-a2z"/><path class="bo51iypxr"/><path class="zor1fdc8q"/><path class="i7lhwccgf"/></g>`,
		"fallback": "iconmind:atom-duotone-bold",
	});
}

export default Component;

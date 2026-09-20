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
		"content": `<style>.a_-b16kjh {
  d: path("M15 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.f22ajzb8t {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.x1w930bwh {
  d: path("M5 20a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="f22ajzb8t"/><path class="vhnbtvbtn"/><path class="x1w930bwh"/><path class="a_-b16kjh"/></g>`,
		"fallback": "iconmind:bus-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.a-v3knb-a {
  d: path("M3 14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.bjo0kbbwk {
  d: path("M6 16.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hrm50umfz {
  d: path("M6 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.lwlflab4b {
  d: path("M14 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x4l5r-bat {
  d: path("M14 16.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="a-v3knb-a"/><path class="bjo0kbbwk"/><path class="x4l5r-bat"/><path class="hrm50umfz"/><path class="lwlflab4b"/></g>`,
		"fallback": "iconmind:heap-outline-bold",
	});
}

export default Component;

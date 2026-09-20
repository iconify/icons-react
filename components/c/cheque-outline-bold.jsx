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
		"content": `<style>.d3f-rpbhx {
  d: path("M5 9h6");
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yh3czw4qv {
  d: path("M13 15.5h6");
}
</style><g class="s0phu2bbs"><path class="ky4omnbla"/><path class="d3f-rpbhx"/><path class="yh3czw4qv"/></g>`,
		"fallback": "iconmind:cheque-outline-bold",
	});
}

export default Component;

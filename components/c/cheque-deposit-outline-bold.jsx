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

.hokxmxb-u {
  d: path("M13 9v6");
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

.xl1fc1yvu {
  d: path("M10.5 12.5 13 15l2.5 -2.5");
}
</style><g class="s0phu2bbs"><path class="ky4omnbla"/><path class="d3f-rpbhx"/><path class="hokxmxb-u"/><path class="xl1fc1yvu"/></g>`,
		"fallback": "iconmind:cheque-deposit-outline-bold",
	});
}

export default Component;

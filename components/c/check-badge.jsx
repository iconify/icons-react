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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4pe68_by {
  d: path("m20.712 13.05l-1.188 1.584a1.75 1.75 0 0 0-.334.819l-.263 1.971a1.75 1.75 0 0 1-1.503 1.503l-1.971.263a1.75 1.75 0 0 0-.819.334l-1.584 1.188a1.75 1.75 0 0 1-2.1 0l-1.584-1.188a1.75 1.75 0 0 0-.819-.334l-1.971-.263a1.75 1.75 0 0 1-1.503-1.503l-.263-1.971a1.75 1.75 0 0 0-.334-.819L3.287 13.05a1.75 1.75 0 0 1 0-2.1l1.189-1.584a1.75 1.75 0 0 0 .334-.819l.263-1.971a1.75 1.75 0 0 1 1.503-1.503l1.971-.263a1.75 1.75 0 0 0 .819-.334l1.584-1.189a1.75 1.75 0 0 1 2.1 0l1.584 1.189a1.75 1.75 0 0 0 .819.334l1.971.263a1.75 1.75 0 0 1 1.503 1.503l.263 1.971a1.75 1.75 0 0 0 .334.819l1.188 1.584a1.75 1.75 0 0 1 0 2.1");
}

.rl0hurbau {
  d: path("m8.5 12l2.5 2.5l4.5-5");
}
</style><g class="hntgybcog"><path class="j4pe68_by"/><path class="rl0hurbau"/></g>`,
		"fallback": "uix:check-badge",
	});
}

export default Component;

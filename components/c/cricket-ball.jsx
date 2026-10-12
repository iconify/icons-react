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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q7_rzcclg {
  d: path("M3.05 10.6c5.9 2 12 2 17.9 0l.05 2.9c-5.95 2-12.05 2-18 0Z");
}

.y7bvh7bmn {
  d: path("M9.5 3.25c-1.5 3-2 6-1.9 8.4m1.9 9.1c-1.5-2-2-3.6-1.9-5.4");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="q7_rzcclg"/><path class="y7bvh7bmn"/></g>`,
		"fallback": "iconoven:cricket-ball",
	});
}

export default Component;

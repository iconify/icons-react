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

.pcjybg6ik {
  d: path("M4.75 3.25h7.75q1 0 1.67.74l.91 1.02q.67.74.67 1.74v.5q0 1-1 1h-10q-1 0-1-1v-3q0-1 1-1m4.5 5v12.5");
}

.sanpeybap {
  d: path("m15.75 17.1l1 1l1.75-1.85");
}

.ycfjfqbdy {
  cx: 17.25px;
  cy: 17px;
  r: 3.5px;
}
</style><g class="hntgybcog"><path class="pcjybg6ik"/><circle class="ycfjfqbdy"/><path class="sanpeybap"/></g>`,
		"fallback": "iconoven:build-status",
	});
}

export default Component;

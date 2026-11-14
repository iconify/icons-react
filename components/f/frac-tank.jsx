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
		"content": `<style>.fz9337bep {
  d: path("M7.25 6h9.5a4.75 4.75 0 0 1 4.75 4.75a4.75 4.75 0 0 1-4.75 4.75h-9.5a4.75 4.75 0 0 1-4.75-4.75A4.75 4.75 0 0 1 7.25 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uv5ke20gu {
  d: path("M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 6V3m-1.5 0h3");
}
</style><g class="hntgybcog"><path class="fz9337bep"/><path class="uv5ke20gu"/></g>`,
		"fallback": "uix:frac-tank",
	});
}

export default Component;

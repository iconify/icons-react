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
		"content": `<style>.covs79xsh {
  fill: currentColor;
  d: path("M4.5 18.5H7A1.5 1.5 0 0 1 8.5 20A1.5 1.5 0 0 1 7 21.5H4.5A1.5 1.5 0 0 1 3 20a1.5 1.5 0 0 1 1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s7nnxlymo {
  d: path("M8.5 6a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M5 15.5c0-2 3-3.25 7-3.25s7 1.25 7 3.25m-14.5 3h15A1.5 1.5 0 0 1 21 20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="s7nnxlymo"/><path class="covs79xsh"/></g>`,
		"fallback": "uix:capacity-low",
	});
}

export default Component;

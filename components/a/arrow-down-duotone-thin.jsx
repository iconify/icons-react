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
		"content": `<style>.ag27qibsz {
  d: path("m7 15 5 5 5 -5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m3dr_ybtq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 15 5 5 5 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.wj8ybccjk {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="wj8ybccjk"/><path class="m3dr_ybtq"/><path class="r7xk8o29f"/><path class="ag27qibsz"/></g>`,
		"fallback": "iconmind:arrow-down-duotone-thin",
	});
}

export default Component;

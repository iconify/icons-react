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
		"content": `<style>.bo841zbxr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 10v10h10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i67dqei2u {
  d: path("M4 10v10h10");
}

.piaam4vpr {
  d: path("M20 4 4 20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v922o3vez {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M20 4 4 20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="v922o3vez"/><path class="bo841zbxr"/><path class="piaam4vpr"/><path class="i67dqei2u"/></g>`,
		"fallback": "iconmind:arrow-down-left-duotone-bold",
	});
}

export default Component;

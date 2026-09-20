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
		"content": `<style>.c6uw-ccfl {
  d: path("M7 14h10");
}

.lt_3_vk1y {
  d: path("M7 21V8l2.5 -2.5V3h5v2.5L17 8v13Z");
}

.q4_2_okqa {
  fill: currentColor;
  d: path("M7 21V8l2.5 -2.5V3h5v2.5L17 8v13Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="q4_2_okqa"/><path class="lt_3_vk1y"/><path class="c6uw-ccfl"/></g>`,
		"fallback": "iconmind:hydration-track-duotone-bold",
	});
}

export default Component;

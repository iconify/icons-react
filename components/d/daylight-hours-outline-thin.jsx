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
		"content": `<style>.gr0pfvalr {
  d: path("M9 10a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yak33lb9w {
  d: path("M3 19a9 9 0 0 1 18 0");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="hntgybcog"><path class="yak33lb9w"/><path class="z9ittvbis"/><path class="gr0pfvalr"/></g>`,
		"fallback": "iconmind:daylight-hours-outline-thin",
	});
}

export default Component;

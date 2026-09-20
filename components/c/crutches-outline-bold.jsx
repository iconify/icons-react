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
		"content": `<style>.bhj229bdw {
  d: path("M14 4h6");
}

.fa77bsbgi {
  d: path("M4 10h6");
}

.py87sqk9l {
  d: path("M7 4v17");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tj33frbke {
  d: path("M17 4v17");
}

.w2atjyb_m {
  d: path("M14 10h6");
}

.yfvv4yzsv {
  d: path("M4 4h6");
}
</style><g class="s0phu2bbs"><path class="yfvv4yzsv"/><path class="py87sqk9l"/><path class="fa77bsbgi"/><path class="bhj229bdw"/><path class="tj33frbke"/><path class="w2atjyb_m"/></g>`,
		"fallback": "iconmind:crutches-outline-bold",
	});
}

export default Component;

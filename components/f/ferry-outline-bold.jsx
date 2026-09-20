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
		"content": `<style>.r0ugme01d {
  d: path("M2 15h20l-5 5H7Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tz2pshf0g {
  d: path("M7 15V9h10v6");
}

.vrecxx6kh {
  d: path("M9 6h6");
}
</style><g class="s0phu2bbs"><path class="r0ugme01d"/><path class="tz2pshf0g"/><path class="vrecxx6kh"/></g>`,
		"fallback": "iconmind:ferry-outline-bold",
	});
}

export default Component;

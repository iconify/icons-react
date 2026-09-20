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
		"content": `<style>.gjmq94baq {
  d: path("M15 11v4");
}

.iyj_k-bwo {
  d: path("M12 11v4");
}

.l3hfq7bhw {
  d: path("M9 11v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xr778lbyu {
  d: path("M5 8h4V4h6v4h4v12H5Z");
}
</style><g class="s0phu2bbs"><path class="xr778lbyu"/><path class="l3hfq7bhw"/><path class="iyj_k-bwo"/><path class="gjmq94baq"/></g>`,
		"fallback": "iconmind:ethernet-outline-bold",
	});
}

export default Component;

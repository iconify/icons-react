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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iyj_k-bwo {
  d: path("M12 11v4");
}

.l3hfq7bhw {
  d: path("M9 11v4");
}

.va93cxbbs {
  fill: currentColor;
  d: path("M5 8h4V4h6v4h4v12H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xr778lbyu {
  d: path("M5 8h4V4h6v4h4v12H5Z");
}
</style><g class="hntgybcog"><path class="va93cxbbs"/><path class="xr778lbyu"/><path class="l3hfq7bhw"/><path class="iyj_k-bwo"/><path class="gjmq94baq"/></g>`,
		"fallback": "iconmind:ethernet-duotone-thin",
	});
}

export default Component;

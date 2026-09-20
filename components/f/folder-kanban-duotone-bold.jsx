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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.mxzk029nb {
  d: path("M12 10v4");
}

.r0jamibkm {
  fill: currentColor;
  d: path("M20 7v13H4V4h5l3 3h4");
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

.trdlwwbvq {
  d: path("M15 10v5");
}

.xgrnk0bjr {
  d: path("M9 10v7");
}
</style><g class="s0phu2bbs"><path class="r0jamibkm"/><path class="bn_pu6j-z"/><path class="xgrnk0bjr"/><path class="mxzk029nb"/><path class="trdlwwbvq"/></g>`,
		"fallback": "iconmind:folder-kanban-duotone-bold",
	});
}

export default Component;

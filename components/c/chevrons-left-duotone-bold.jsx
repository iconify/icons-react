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
		"content": `<style>.qdtl06k3j {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m11 4 -8 8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vbpqdmten {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m20 4 -8 8 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wjj8_yb8n {
  d: path("m11 4 -8 8 8 8");
}

.xj_u41y2v {
  d: path("m20 4 -8 8 8 8");
}
</style><g class="s0phu2bbs"><path class="qdtl06k3j"/><path class="vbpqdmten"/><path class="wjj8_yb8n"/><path class="xj_u41y2v"/></g>`,
		"fallback": "iconmind:chevrons-left-duotone-bold",
	});
}

export default Component;

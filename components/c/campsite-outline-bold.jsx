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
		"content": `<style>.nmydmacrd {
  d: path("m12 14 5 -5 5 5Z");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t4q7b5q6x {
  d: path("M7 11v3");
}

.w5ztjmaaw {
  d: path("m2 14 5 -5 5 5Z");
}

.x1gscpb4z {
  d: path("M17 11v3");
}
</style><g class="s0phu2bbs"><path class="w5ztjmaaw"/><path class="nmydmacrd"/><path class="t4q7b5q6x"/><path class="x1gscpb4z"/><path class="pmuiqo95v"/></g>`,
		"fallback": "iconmind:campsite-outline-bold",
	});
}

export default Component;

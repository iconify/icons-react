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
		"content": `<style>.clpojkoko {
  d: path("M6 19a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2");
}

.dvdaq001f {
  fill: currentColor;
  d: path("M2 12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e5z2csb_e {
  fill: currentColor;
  d: path("M6 19a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2");
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

.v1p3s7bgt {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y6b-2ywbl {
  d: path("M2 12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}

.zl16vzbgk {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2");
}
</style><g class="s0phu2bbs"><path class="v1p3s7bgt"/><path class="dvdaq001f"/><path class="e5z2csb_e"/><path class="zl16vzbgk"/><path class="y6b-2ywbl"/><path class="clpojkoko"/></g>`,
		"fallback": "iconmind:flamegraph-duotone-bold",
	});
}

export default Component;

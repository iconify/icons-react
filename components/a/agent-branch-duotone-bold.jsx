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
		"content": `<style>.hxagq7byt {
  d: path("M13 11v10");
}

.jt4-jw3vg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.tfm5uhmjd {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m13 15 4 -4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.v-cn4ub6a {
  d: path("m13 15 4 -4h4");
}

.y0upulckx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 11v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="jt4-jw3vg"/><path class="y0upulckx"/><path class="tfm5uhmjd"/><path class="skbifdbcx"/><path class="hxagq7byt"/><path class="v-cn4ub6a"/></g>`,
		"fallback": "iconmind:agent-branch-duotone-bold",
	});
}

export default Component;

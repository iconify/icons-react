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
		"content": `<style>.dqu3vybkn {
  d: path("m14 13 -2.5 2.5L14 18");
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

.t8y3wdrkk {
  d: path("m19 13 2.5 2.5L19 18");
}

.uw7ypjhpq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m14 13 -2.5 2.5L14 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zow9v_bje {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m19 13 2.5 2.5L19 18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="jt4-jw3vg"/><path class="uw7ypjhpq"/><path class="zow9v_bje"/><path class="skbifdbcx"/><path class="dqu3vybkn"/><path class="t8y3wdrkk"/></g>`,
		"fallback": "iconmind:agent-code-duotone-bold",
	});
}

export default Component;

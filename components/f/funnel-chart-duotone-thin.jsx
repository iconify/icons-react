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
		"content": `<style>.cc0pq4b_o {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M6 12h12");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.earhjk-cy {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 6h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vslz5yb3q {
  d: path("M6 12h12");
}

.x3sflacnk {
  d: path("M9 18h6");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yj0miubwd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 18h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="earhjk-cy"/><path class="cc0pq4b_o"/><path class="yj0miubwd"/><path class="xgrfb-bqu"/><path class="vslz5yb3q"/><path class="x3sflacnk"/></g>`,
		"fallback": "iconmind:funnel-chart-duotone-thin",
	});
}

export default Component;

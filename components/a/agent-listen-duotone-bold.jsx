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
		"content": `<style>.nd_l8-t2z {
  d: path("M4.76 16.24a6 6 0 0 1 0 -8.5");
}

.riv1hrdsb {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4.76 16.24a6 6 0 0 1 0 -8.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rmadx5btw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6.88 14.12a3 3 0 0 1 0 -4.24");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.s0yrzvbnc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18.69 8.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.t6ludmxih {
  d: path("M6.88 14.12a3 3 0 0 1 0 -4.24");
}

.zhmw1tbis {
  d: path("M18.69 8.37a4 4 0 1 1 -3.38 0");
}
</style><g class="s0phu2bbs"><path class="rmadx5btw"/><path class="riv1hrdsb"/><path class="s0yrzvbnc"/><path class="t6ludmxih"/><path class="nd_l8-t2z"/><path class="zhmw1tbis"/></g>`,
		"fallback": "iconmind:agent-listen-duotone-bold",
	});
}

export default Component;

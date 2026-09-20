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
		"content": `<style>.ca7cldnps {
  d: path("M12 18v2.5");
}

.i1q2tccms {
  d: path("M18 18v2.5");
}

.lt5vylzgx {
  d: path("M6 18v2.5");
}

.p3wll6__i {
  d: path("M12 9h3.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u0f6w1z_e {
  d: path("M12 6v3");
}

.yoftwf7ei {
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9");
}
</style><g class="s0phu2bbs"><path class="yoftwf7ei"/><path class="u0f6w1z_e"/><path class="p3wll6__i"/><path class="lt5vylzgx"/><path class="ca7cldnps"/><path class="i1q2tccms"/></g>`,
		"fallback": "iconmind:cron-expression-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.c0ny08jrw {
  fill: currentColor;
  d: path("M14.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jt4-jw3vg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.okqksmbze {
  d: path("M14.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
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

.uc08apbot {
  d: path("M12.5 21a4 4 0 0 1 8 0");
}

.y7bz22_-m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12.5 21a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="c0ny08jrw"/><path class="jt4-jw3vg"/><path class="y7bz22_-m"/><path class="skbifdbcx"/><path class="okqksmbze"/><path class="uc08apbot"/></g>`,
		"fallback": "iconmind:agent-user-duotone-bold",
	});
}

export default Component;

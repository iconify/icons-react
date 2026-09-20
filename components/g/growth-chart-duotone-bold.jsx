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
		"content": `<style>.afx8cdcbt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 6h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bjkhv3eln {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m5 18 4 -4 3 3 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.dqeovmbtl {
  d: path("m5 18 4 -4 3 3 7 -7");
}

.fua3x2iyd {
  d: path("M17 6h4");
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxjvqtiry {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yxjvqtiry"/><path class="bjkhv3eln"/><path class="afx8cdcbt"/><path class="qe97cg-lx"/><path class="dqeovmbtl"/><path class="fua3x2iyd"/></g>`,
		"fallback": "iconmind:growth-chart-duotone-bold",
	});
}

export default Component;

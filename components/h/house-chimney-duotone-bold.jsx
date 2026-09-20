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
		"content": `<style>.cx8rytfxu {
  d: path("M13 8h6");
}

.hofnq6bxf {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m2 21 7 -7 7 7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.kzt40ac1o {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 14V5h6v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qq2o6m5os {
  d: path("M13 14V5h6v16");
}

.rs3qt4avn {
  d: path("m2 21 7 -7 7 7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yxvd6bcij {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M13 8h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="hofnq6bxf"/><path class="kzt40ac1o"/><path class="yxvd6bcij"/><path class="rs3qt4avn"/><path class="qq2o6m5os"/><path class="cx8rytfxu"/></g>`,
		"fallback": "iconmind:house-chimney-duotone-bold",
	});
}

export default Component;

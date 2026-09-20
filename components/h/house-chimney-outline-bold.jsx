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
</style><g class="s0phu2bbs"><path class="rs3qt4avn"/><path class="qq2o6m5os"/><path class="cx8rytfxu"/></g>`,
		"fallback": "iconmind:house-chimney-outline-bold",
	});
}

export default Component;

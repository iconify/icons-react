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
		"content": `<style>.icvc39peu {
  d: path("m9 7 3 3 3 -3");
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xios20bld {
  d: path("M12 10v3");
}
</style><g class="s0phu2bbs"><path class="qad3kqbgr"/><path class="icvc39peu"/><path class="xios20bld"/></g>`,
		"fallback": "iconmind:geo-filter-outline-bold",
	});
}

export default Component;

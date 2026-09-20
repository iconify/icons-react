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
		"content": `<style>.nps6jz3so {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15.5 5H19v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.o6_m2lbfu {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m6 18 6 -6 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
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

.u27h90bpp {
  d: path("m6 18 6 -6 7 -7");
}

.yqoazhbqh {
  d: path("M15.5 5H19v3.5");
}

.yxjvqtiry {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="yxjvqtiry"/><path class="o6_m2lbfu"/><path class="nps6jz3so"/><path class="qe97cg-lx"/><path class="u27h90bpp"/><path class="yqoazhbqh"/></g>`,
		"fallback": "iconmind:forecast-spend-duotone-bold",
	});
}

export default Component;

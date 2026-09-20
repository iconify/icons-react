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
		"content": `<style>.ddskmd73c {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15.5 5H19v3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e5rxwxb6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.u27h90bpp {
  d: path("m6 18 6 -6 7 -7");
}

.xhf98f2ih {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m6 18 6 -6 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yqoazhbqh {
  d: path("M15.5 5H19v3.5");
}
</style><g class="hntgybcog"><path class="e5rxwxb6q"/><path class="xhf98f2ih"/><path class="ddskmd73c"/><path class="qe97cg-lx"/><path class="u27h90bpp"/><path class="yqoazhbqh"/></g>`,
		"fallback": "iconmind:forecast-spend-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.a8ca2rpxt {
  d: path("M15 5h3v14h-3");
}

.dxtd0mgej {
  d: path("M9 5H6v14h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nr9bbxbsd {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 5H6v14h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r2uy21bnv {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M10 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s2clt2bfp {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 5h3v14h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="hntgybcog"><path class="nr9bbxbsd"/><path class="s2clt2bfp"/><path class="r2uy21bnv"/><path class="dxtd0mgej"/><path class="a8ca2rpxt"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:function-def-duotone-thin",
	});
}

export default Component;

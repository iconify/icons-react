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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t0ucggbme {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M10 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uv3sjmj4c {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M15 5h3v14h-3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xq6e7eu2p {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 5H6v14h3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="s0phu2bbs"><path class="xq6e7eu2p"/><path class="uv3sjmj4c"/><path class="t0ucggbme"/><path class="dxtd0mgej"/><path class="a8ca2rpxt"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:function-def-duotone-bold",
	});
}

export default Component;

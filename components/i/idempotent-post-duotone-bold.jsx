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
		"content": `<style>.bt9fpobhk {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 14h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c1kziyotx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c9lo3xbix {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 10h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.hieqhxiaw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.jtt8g10_o {
  d: path("M9 10h6");
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="c1kziyotx"/><path class="hieqhxiaw"/><path class="c9lo3xbix"/><path class="bt9fpobhk"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="jtt8g10_o"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:idempotent-post-duotone-bold",
	});
}

export default Component;

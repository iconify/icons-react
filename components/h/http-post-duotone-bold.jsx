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
		"content": `<style>.c1kziyotx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 3H3v18h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.e84lw4bzo {
  d: path("M12 10v5.5");
}

.hieqhxiaw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 3h4v18h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.lzayu62pc {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 10v5.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ri_favbdz {
  d: path("M9.5 12.5 12 10l2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wd4wk5bje {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9.5 12.5 12 10l2.5 2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="c1kziyotx"/><path class="hieqhxiaw"/><path class="lzayu62pc"/><path class="wd4wk5bje"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="e84lw4bzo"/><path class="ri_favbdz"/></g>`,
		"fallback": "iconmind:http-post-duotone-bold",
	});
}

export default Component;

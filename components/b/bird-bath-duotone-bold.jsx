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
		"content": `<style>.crydxpbzr {
  fill: currentColor;
  d: path("M4 7h16c0 4 -4 6 -8 6s-8 -2 -8 -6");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.n8sqmebht {
  d: path("M7 18h10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.utcr20lug {
  d: path("M12 13v5");
}

.vf5uqoncb {
  d: path("M4 7h16c0 4 -4 6 -8 6s-8 -2 -8 -6");
}
</style><g class="s0phu2bbs"><path class="crydxpbzr"/><path class="vf5uqoncb"/><path class="utcr20lug"/><path class="n8sqmebht"/></g>`,
		"fallback": "iconmind:bird-bath-duotone-bold",
	});
}

export default Component;

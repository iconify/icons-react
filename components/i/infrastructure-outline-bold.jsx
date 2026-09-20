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
		"content": `<style>.bod4n0b3z {
  d: path("M2 18h20");
}

.fh6z5db0d {
  d: path("M4 5a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.nc3tobbpg {
  d: path("M14 5a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.nqnw98byf {
  d: path("M2 14h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="fh6z5db0d"/><path class="nc3tobbpg"/><path class="nqnw98byf"/><path class="bod4n0b3z"/></g>`,
		"fallback": "iconmind:infrastructure-outline-bold",
	});
}

export default Component;

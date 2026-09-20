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
		"content": `<style>.fhtkkzo7b {
  fill: currentColor;
  d: path("M11 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ghgpbwtop {
  d: path("M11 6a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.l2nbo7bgf {
  d: path("M4 15a8 8 0 0 1 16 0");
}

.l8dn9jbyp {
  d: path("M2 15h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tt-5y-ilt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 15a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ycftzzhuq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 15h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="fhtkkzo7b"/><path class="tt-5y-ilt"/><path class="ycftzzhuq"/><path class="l2nbo7bgf"/><path class="l8dn9jbyp"/><path class="ghgpbwtop"/></g>`,
		"fallback": "iconmind:catering-duotone-bold",
	});
}

export default Component;

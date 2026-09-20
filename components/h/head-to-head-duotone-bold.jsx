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
		"content": `<style>.k2lsbgbpx {
  d: path("M14 17a4 4 0 0 1 8 0");
}

.lo7kp72nh {
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nnidkxr0z {
  d: path("M2 17a4 4 0 0 1 8 0");
}

.pb1wrt76j {
  d: path("M15 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pldekmw0i {
  fill: currentColor;
  d: path("M15 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.r7xk8o29f {
  d: path("M12 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yyvm7xbin {
  fill: currentColor;
  d: path("M3 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="yyvm7xbin"/><path class="pldekmw0i"/><path class="lo7kp72nh"/><path class="nnidkxr0z"/><path class="pb1wrt76j"/><path class="k2lsbgbpx"/><path class="r7xk8o29f"/></g>`,
		"fallback": "iconmind:head-to-head-duotone-bold",
	});
}

export default Component;

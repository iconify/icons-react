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
		"content": `<style>.fzck83blw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9.25h3M5.5 12h3m2.75-3.5h2.5m-2.5 6.25h3.25a2 2 0 0 1 2 2V17");
}

.hf69fobet {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.25 6.75h.01");
}

.pbmr6pbso {
  cx: 17.25px;
  cy: 6.75px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wa4d1qb6h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m17.25 6.75l2-2");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z1jlxibqc {
  cx: 16.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zgyqcp76m {
  width: 8.5px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}
</style><g class="y9tr6bcfx"><rect class="zgyqcp76m"/><path class="fzck83blw"/><circle class="pbmr6pbso"/><path class="wa4d1qb6h"/><path class="hf69fobet"/><circle class="z1jlxibqc"/></g>`,
		"fallback": "iconoven:blood-pressure-cuff",
	});
}

export default Component;

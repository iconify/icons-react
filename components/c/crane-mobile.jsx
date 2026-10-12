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
		"content": `<style>.at-v-ac8j {
  cx: 15.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rcbntwbcw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 19h.01");
}

.rlar09bwl {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.5 19h.01");
}

.u1v_qsbkd {
  cx: 8.5px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.utid7jb4d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 15.5v-1.75q0-1.25.67-2.3l.41-.65q.67-1.05 1.92-1.05h1.5Q8.5 9.75 8.5 11v1q0 1.25 1.25 1.25H20q1.25 0 1.25 1.25v1q0 1.25-1.25 1.25H4q-1.25 0-1.25-1.25M8.5 9.75l12.5-6v5a1 1 0 0 1-2 0m-15.75 8v4.5m17.5-4.5v4.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="utid7jb4d"/><circle class="u1v_qsbkd"/><path class="rcbntwbcw"/><circle class="at-v-ac8j"/><path class="rlar09bwl"/></g>`,
		"fallback": "iconoven:crane-mobile",
	});
}

export default Component;

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
		"content": `<style>.e79pxlj0m {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.epp387bjj {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 12v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ezg__mbcy {
  fill: currentColor;
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k3pzaihav {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 12a6 6 0 0 1 12 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k9on3tb9k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 16h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m_812vyum {
  d: path("M6 12v4");
}

.qml-hybqn {
  d: path("M18 12v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tp8vjxbvr {
  d: path("M6 12a6 6 0 0 1 12 0");
}

.u4sowhi7h {
  d: path("M4 16h16");
}
</style><g class="s0phu2bbs"><path class="ezg__mbcy"/><path class="k3pzaihav"/><path class="e79pxlj0m"/><path class="epp387bjj"/><path class="k9on3tb9k"/><path class="tp8vjxbvr"/><path class="m_812vyum"/><path class="qml-hybqn"/><path class="u4sowhi7h"/><path class="if5ft31dv"/></g>`,
		"fallback": "iconmind:action-notify-duotone-bold",
	});
}

export default Component;

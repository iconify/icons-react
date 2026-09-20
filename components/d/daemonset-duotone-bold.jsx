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
		"content": `<style>.dpra8nb8c {
  fill: currentColor;
  d: path("M16 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.e6q34etyy {
  d: path("M16 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.f73i47bnv {
  d: path("M9 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.jkaxw8b5s {
  fill: currentColor;
  d: path("M2 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m_m6c4t8g {
  d: path("M2 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.pmuiqo95v {
  d: path("M2 17h20");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zmp0zuf9j {
  fill: currentColor;
  d: path("M9 11a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="jkaxw8b5s"/><path class="zmp0zuf9j"/><path class="dpra8nb8c"/><path class="pmuiqo95v"/><path class="m_m6c4t8g"/><path class="f73i47bnv"/><path class="e6q34etyy"/></g>`,
		"fallback": "iconmind:daemonset-duotone-bold",
	});
}

export default Component;

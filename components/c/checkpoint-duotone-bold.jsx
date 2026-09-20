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
		"content": `<style>.aep_ellef {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 3v18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.es50mwbqx {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 5h12v7H6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ftqzjnb8u {
  d: path("M6 3v18");
}

.qnhyftzmc {
  d: path("M6 5h12v7H6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="aep_ellef"/><path class="es50mwbqx"/><path class="ftqzjnb8u"/><path class="qnhyftzmc"/></g>`,
		"fallback": "iconmind:checkpoint-duotone-bold",
	});
}

export default Component;

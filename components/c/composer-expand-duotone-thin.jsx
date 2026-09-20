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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m51ptibtg {
  d: path("M6 11.5v4");
}

.om4dt2bov {
  d: path("M2 11a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.qlbm0nbis {
  fill: currentColor;
  d: path("M2 11a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.tdul-wdwn {
  d: path("m9 6 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="qlbm0nbis"/><path class="om4dt2bov"/><path class="m51ptibtg"/><path class="tdul-wdwn"/></g>`,
		"fallback": "iconmind:composer-expand-duotone-thin",
	});
}

export default Component;

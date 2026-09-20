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

.lkivjibuo {
  d: path("M12 13v7");
}

.p6px4qbbr {
  d: path("M12 16H8");
}

.pmv9af26x {
  d: path("M12 16h4");
}

.s9ivncb1z {
  fill: currentColor;
  d: path("M5 13a4 4 0 0 1 4 -6 4 4 0 0 1 6 0 4 4 0 0 1 4 6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t2xnbczjm {
  d: path("M5 13a4 4 0 0 1 4 -6 4 4 0 0 1 6 0 4 4 0 0 1 4 6Z");
}
</style><g class="hntgybcog"><path class="s9ivncb1z"/><path class="t2xnbczjm"/><path class="lkivjibuo"/><path class="p6px4qbbr"/><path class="pmv9af26x"/></g>`,
		"fallback": "iconmind:broccoli-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.gpavt6bkm {
  d: path("M2 8a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mvo4nxq3c {
  d: path("M16 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.so0bhmbof {
  d: path("M11 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.taxmbub4q {
  d: path("M6 17h12");
}

.xsyfe-byx {
  d: path("M6 13a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.yn-uw6wxg {
  d: path("m9 3 3 3 3 -3");
}
</style><g class="hntgybcog"><path class="gpavt6bkm"/><path class="xsyfe-byx"/><path class="so0bhmbof"/><path class="mvo4nxq3c"/><path class="taxmbub4q"/><path class="yn-uw6wxg"/></g>`,
		"fallback": "iconmind:broadcast-net-outline-thin",
	});
}

export default Component;

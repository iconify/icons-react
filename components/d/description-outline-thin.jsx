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

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.qii79lbir {
  d: path("M6 14h8");
}

.v9il_wb-q {
  d: path("M6 10h12");
}
</style><g class="hntgybcog"><path class="okud9xj_d"/><path class="v9il_wb-q"/><path class="qii79lbir"/></g>`,
		"fallback": "iconmind:description-outline-thin",
	});
}

export default Component;

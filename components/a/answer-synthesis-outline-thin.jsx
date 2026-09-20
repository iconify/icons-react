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
		"content": `<style>.b7nacdcee {
  d: path("M3 6h6");
}

.d_scobift {
  d: path("M3 18h6");
}

.d223d_x9q {
  d: path("M3 12h6");
}

.f2m4wubik {
  d: path("M13 12h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k2jd848hu {
  d: path("m9 16 4 -4");
}

.ymrjh3b_x {
  d: path("m9 8 4 4");
}
</style><g class="hntgybcog"><path class="b7nacdcee"/><path class="d223d_x9q"/><path class="d_scobift"/><path class="ymrjh3b_x"/><path class="k2jd848hu"/><path class="f2m4wubik"/></g>`,
		"fallback": "iconmind:answer-synthesis-outline-thin",
	});
}

export default Component;

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

.hvqjucczz {
  d: path("M8.24 16.13a4 4 0 0 1 7.5 0");
}

.j5baogbem {
  d: path("M8 11h8");
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ozi-k-boi {
  d: path("M3 7h18");
}

.wxrq2_b_h {
  d: path("M10.12 16.82a2 2 0 0 1 3.76 0");
}
</style><g class="hntgybcog"><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="j5baogbem"/><path class="wxrq2_b_h"/><path class="hvqjucczz"/></g>`,
		"fallback": "iconmind:contactless-limit-outline-thin",
	});
}

export default Component;

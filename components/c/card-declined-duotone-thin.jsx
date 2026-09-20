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
		"content": `<style>.avnm-g99q {
  d: path("m14 12 -4 4");
}

.f-t_rcb_j {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6fi9qmtq {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.mb7g-z76v {
  d: path("m10 12 4 4");
}

.ozi-k-boi {
  d: path("M3 7h18");
}
</style><g class="hntgybcog"><path class="f-t_rcb_j"/><path class="k6fi9qmtq"/><path class="ozi-k-boi"/><path class="mb7g-z76v"/><path class="avnm-g99q"/></g>`,
		"fallback": "iconmind:card-declined-duotone-thin",
	});
}

export default Component;

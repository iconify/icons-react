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
		"content": `<style>.bm7onkbce {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9.5 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.e77gki8ci {
  d: path("M2 20V10l3 -3h14l3 3v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m7aa3ibix {
  d: path("M14.5 11v6");
}

.n92b0ebji {
  d: path("M9.5 11v6");
}

.nwi87ac4g {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 20V10l3 -3h14l3 3v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.rweggx0cr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M14.5 11v6");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="nwi87ac4g"/><path class="bm7onkbce"/><path class="rweggx0cr"/><path class="e77gki8ci"/><path class="n92b0ebji"/><path class="m7aa3ibix"/></g>`,
		"fallback": "iconmind:hold-at-depot-duotone-thin",
	});
}

export default Component;

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
		"content": `<style>.azjtlhb3x {
  d: path("M4 18a8 8 0 0 1 16 0");
}

.eznyk7zro {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 18a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.islaupcie {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 18a3 3 0 0 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.no90vc3pu {
  d: path("M7 18a5 5 0 0 1 10 0");
}

.o41eah0bw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 18a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pz-mn72mn {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M2 18a10 10 0 0 1 20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wk7jmzmpf {
  d: path("M9 18a3 3 0 0 1 6 0");
}

.ydpucsi6v {
  d: path("M2 18a10 10 0 0 1 20 0");
}
</style><g class="hntgybcog"><path class="pz-mn72mn"/><path class="o41eah0bw"/><path class="eznyk7zro"/><path class="islaupcie"/><path class="ydpucsi6v"/><path class="azjtlhb3x"/><path class="no90vc3pu"/><path class="wk7jmzmpf"/></g>`,
		"fallback": "iconmind:double-rainbow-duotone-thin",
	});
}

export default Component;

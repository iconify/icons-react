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

.e8i7n8dqg {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 18a8 8 0 0 1 16 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hts3l1lgi {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M7 18a5 5 0 0 1 10 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.no90vc3pu {
  d: path("M7 18a5 5 0 0 1 10 0");
}

.o27uewb7x {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M2 18a10 10 0 0 1 20 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wk7jmzmpf {
  d: path("M9 18a3 3 0 0 1 6 0");
}

.wnx5l5kdh {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M9 18a3 3 0 0 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ydpucsi6v {
  d: path("M2 18a10 10 0 0 1 20 0");
}
</style><g class="s0phu2bbs"><path class="o27uewb7x"/><path class="e8i7n8dqg"/><path class="hts3l1lgi"/><path class="wnx5l5kdh"/><path class="ydpucsi6v"/><path class="azjtlhb3x"/><path class="no90vc3pu"/><path class="wk7jmzmpf"/></g>`,
		"fallback": "iconmind:double-rainbow-duotone-bold",
	});
}

export default Component;

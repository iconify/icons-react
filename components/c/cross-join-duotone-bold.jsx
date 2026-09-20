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
		"content": `<style>.aeqgdde5a {
  d: path("m7 6 10 10");
}

.eiurwqh7f {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M17 6 7 16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.fgef0hcge {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M19 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.lvimmjmhy {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m7 6 10 10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.naa67qbfw {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M5 4v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.pd0q9ub5m {
  d: path("M17 6 7 16");
}

.ppivcbbzp {
  d: path("M5 4v16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t3rq50btb {
  d: path("M19 4v16");
}
</style><g class="s0phu2bbs"><path class="naa67qbfw"/><path class="fgef0hcge"/><path class="lvimmjmhy"/><path class="eiurwqh7f"/><path class="ppivcbbzp"/><path class="t3rq50btb"/><path class="aeqgdde5a"/><path class="pd0q9ub5m"/></g>`,
		"fallback": "iconmind:cross-join-duotone-bold",
	});
}

export default Component;

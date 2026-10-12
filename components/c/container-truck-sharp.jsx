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
		"content": `<style>.ox2ue_b-w {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 19h.01");
}

.r_0b548wt {
  cx: 7px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r6parkbau {
  cx: 19px;
  cy: 19px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t66ctv5hf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 19h.01");
}

.ulxnfkqvr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5H14v10.25H2.75zm3 2.5v5m3-5v5m3-5v5m5-4.25v-1h2.705l.445.67l1.1 1.6l.25.368v5.362h-4.5Zm0 2.5h4.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ulxnfkqvr"/><circle class="r_0b548wt"/><path class="ox2ue_b-w"/><circle class="r6parkbau"/><path class="t66ctv5hf"/></g>`,
		"fallback": "iconoven:container-truck-sharp",
	});
}

export default Component;

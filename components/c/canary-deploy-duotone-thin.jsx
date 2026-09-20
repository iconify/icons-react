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
		"content": `<style>.d63up430u {
  d: path("m17 9 3 3 -3 3 -3 -3Z");
}

.ehzfylb8o {
  fill: currentColor;
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
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

.ik93a37tn {
  d: path("M4 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.qrt68cb_v {
  fill: currentColor;
  d: path("m17 9 3 3 -3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xdvrnob5t {
  fill: currentColor;
  d: path("M4 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="ehzfylb8o"/><path class="xdvrnob5t"/><path class="qrt68cb_v"/><path class="okud9xj_d"/><path class="ik93a37tn"/><path class="d63up430u"/></g>`,
		"fallback": "iconmind:canary-deploy-duotone-thin",
	});
}

export default Component;

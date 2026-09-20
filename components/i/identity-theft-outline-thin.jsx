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
		"content": `<style>.gwl0nvbom {
  d: path("M6 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mxs2onbso {
  d: path("M5 15h6");
}

.nse9uf-8v {
  d: path("m14 9 5 5");
}

.okud9xj_d {
  d: path("M2 7a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.pojccnb-b {
  d: path("m19 9 -5 5");
}
</style><g class="hntgybcog"><path class="okud9xj_d"/><path class="gwl0nvbom"/><path class="mxs2onbso"/><path class="nse9uf-8v"/><path class="pojccnb-b"/></g>`,
		"fallback": "iconmind:identity-theft-outline-thin",
	});
}

export default Component;

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
		"content": `<style>.ci4x5ab7x {
  d: path("M5.5 17h6");
}

.inp0fub_p {
  d: path("M2 6a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t7ql4f28h {
  d: path("m19 10 2 2 -2 2");
}

.zy54a7bml {
  d: path("M17 12h4");
}
</style><g class="s0phu2bbs"><path class="inp0fub_p"/><path class="ci4x5ab7x"/><path class="zy54a7bml"/><path class="t7ql4f28h"/></g>`,
		"fallback": "iconmind:client-outline-bold",
	});
}

export default Component;

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
		"content": `<style>.b_nqqtobi {
  cx: 9px;
  cy: 14.25px;
  r: 1.5px;
}

.fjmv110wk {
  d: path("M2.75 7.75a2 2 0 0 1 2-2h14.5a2 2 0 0 1 2 2V9.5a2.5 2.5 0 0 0 0 5v1.75a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2V14.5a2.5 2.5 0 0 0 0-5Zm13.5 0v.75m0 3v1m0 3v.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l4pf74bqn {
  d: path("M10.5 14.25v-5.5l2.5 1");
}
</style><g class="hntgybcog"><path class="fjmv110wk"/><circle class="b_nqqtobi"/><path class="l4pf74bqn"/></g>`,
		"fallback": "iconoven:concert-ticket",
	});
}

export default Component;

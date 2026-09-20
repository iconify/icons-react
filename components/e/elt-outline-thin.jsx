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
		"content": `<style>.h0xx2obvc {
  d: path("M13 12h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ksh4iaclj {
  d: path("M2 5a5 2.5 0 0 0 10 0");
}

.lyk3lbb0z {
  d: path("M2 5a5 2.5 0 0 1 10 0v8a5 2.5 0 0 1 -10 0Z");
}

.voz_x46if {
  d: path("M15 17a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.zpl29uvhf {
  d: path("m16 9 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="lyk3lbb0z"/><path class="ksh4iaclj"/><path class="h0xx2obvc"/><path class="zpl29uvhf"/><path class="voz_x46if"/></g>`,
		"fallback": "iconmind:elt-outline-thin",
	});
}

export default Component;

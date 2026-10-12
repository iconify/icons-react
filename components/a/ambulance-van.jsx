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
		"content": `<style>.d0ca424zn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 11.25h16.5m-14 0L7 8.5h10l.75 2.75m-5.75 2v3.5M10.25 15h3.5");
}

.fzvenabfm {
  width: 16.5px;
  height: 13px;
  x: 3.75px;
  y: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.j2vmgobzr {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 19v2m11-2v2");
}

.ottw80o6z {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 3h5.5");
}

.s91v-jwfo {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 15h.01m10.49 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ottw80o6z"/><rect class="fzvenabfm"/><path class="d0ca424zn"/><path class="s91v-jwfo"/><path class="j2vmgobzr"/></g>`,
		"fallback": "iconoven:ambulance-van",
	});
}

export default Component;

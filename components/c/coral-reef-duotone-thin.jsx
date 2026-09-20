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
		"content": `<style>.aut5o13zt {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m7 15 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.axphtybjp {
  d: path("M15 21V9l-3 -3");
}

.bos0j4biy {
  d: path("M3 21h18");
}

.f9mh2ubcr {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 13 4 -4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.gdxs68qsm {
  d: path("M7 21v-9L4 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l45mc7cap {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M7 21v-9L4 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.m2jk0x1pg {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M15 21V9l-3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.r1wy_ibgj {
  d: path("m15 13 4 -4");
}

.utps5obsq {
  d: path("m7 15 4 -4");
}

.ymhw07_9a {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 21h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="l45mc7cap"/><path class="aut5o13zt"/><path class="m2jk0x1pg"/><path class="f9mh2ubcr"/><path class="ymhw07_9a"/><path class="gdxs68qsm"/><path class="utps5obsq"/><path class="axphtybjp"/><path class="r1wy_ibgj"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:coral-reef-duotone-thin",
	});
}

export default Component;

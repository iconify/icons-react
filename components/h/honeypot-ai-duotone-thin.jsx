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
		"content": `<style>.a1n3csb_d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 5h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b3s4djbny {
  d: path("M4 5h16");
}

.b4kvax4jt {
  d: path("M5 8v12h14V8");
}

.d0htjl-rm {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M5 8v12h14V8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u7m7z6ojw {
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.z1ra8bb5p {
  fill: currentColor;
  d: path("M10 14a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="z1ra8bb5p"/><path class="d0htjl-rm"/><path class="a1n3csb_d"/><path class="b4kvax4jt"/><path class="b3s4djbny"/><path class="u7m7z6ojw"/></g>`,
		"fallback": "iconmind:honeypot-ai-duotone-thin",
	});
}

export default Component;

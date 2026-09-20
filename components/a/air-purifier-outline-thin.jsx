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
		"content": `<style>.f8gsx7b5s {
  d: path("M6 8h12");
}

.hclo6jb2r {
  d: path("M8 16h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j8arz0w3t {
  d: path("M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H8a2 2 0 0 1 -2 -2Z");
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.ltl8_ccdr {
  d: path("M3 6h3");
}
</style><g class="hntgybcog"><path class="j8arz0w3t"/><path class="f8gsx7b5s"/><path class="l0v-b4kbr"/><path class="hclo6jb2r"/><path class="ltl8_ccdr"/></g>`,
		"fallback": "iconmind:air-purifier-outline-thin",
	});
}

export default Component;

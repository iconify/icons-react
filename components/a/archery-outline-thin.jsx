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
		"content": `<style>.em798y7rn {
  d: path("M6 12h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mi_m6achy {
  d: path("m17 9 3 3 -3 3");
}

.ndk47rb8x {
  d: path("M8 3c6 3 6 15 0 18");
}

.wuvisubmw {
  d: path("M8 3v18");
}
</style><g class="hntgybcog"><path class="ndk47rb8x"/><path class="wuvisubmw"/><path class="em798y7rn"/><path class="mi_m6achy"/></g>`,
		"fallback": "iconmind:archery-outline-thin",
	});
}

export default Component;

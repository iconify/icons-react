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
		"content": `<style>.jkuojibnm {
  d: path("M3 20h18");
}

.nn2mbucfp {
  d: path("M5 20V8h5v12");
}

.om9c7ck0x {
  d: path("M13 8h7");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wwyi7ubez {
  d: path("M14 20v-6h5v6");
}
</style><g class="s0phu2bbs"><path class="jkuojibnm"/><path class="nn2mbucfp"/><path class="wwyi7ubez"/><path class="om9c7ck0x"/></g>`,
		"fallback": "iconmind:budget-vs-actual-outline-bold",
	});
}

export default Component;

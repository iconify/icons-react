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
		"content": `<style>.a5tuk3h7e {
  d: path("M4 10h16");
}

.akar2ebka {
  d: path("m18 8 -4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.scwel3iok {
  d: path("m6 8 4 -4");
}

.xtf0w138e {
  d: path("M4 10v7h16v-7");
}
</style><g class="s0phu2bbs"><path class="xtf0w138e"/><path class="a5tuk3h7e"/><path class="scwel3iok"/><path class="akar2ebka"/></g>`,
		"fallback": "iconmind:drum-outline-bold",
	});
}

export default Component;

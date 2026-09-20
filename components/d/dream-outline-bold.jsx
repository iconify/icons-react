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
		"content": `<style>.f-g8rrj2k {
  d: path("M2 21a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.iervj3bls {
  d: path("M7 16a4 4 0 0 1 1 -8 5 5 0 0 1 9 1 4 4 0 0 1 0 7Z");
}

.koh8ckbdb {
  d: path("M5 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="iervj3bls"/><path class="koh8ckbdb"/><path class="f-g8rrj2k"/></g>`,
		"fallback": "iconmind:dream-outline-bold",
	});
}

export default Component;

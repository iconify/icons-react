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
		"content": `<style>.a3fayfb3t {
  d: path("M2 18v-6l7 -7h9a2 2 0 0 1 2 2v11Z");
}

.bcoat1b-j {
  d: path("M9 12h11");
}

.bos0j4biy {
  d: path("M3 21h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="a3fayfb3t"/><path class="bcoat1b-j"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:high-speed-train-outline-bold",
	});
}

export default Component;

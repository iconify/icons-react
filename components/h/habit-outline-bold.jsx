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
		"content": `<style>.a8cyhwbdj {
  d: path("M16 2v3");
}

.cu26jmb_i {
  d: path("M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.j835zw5-z {
  d: path("M3 9h18");
}

.q7kpryb3v {
  d: path("M8 2v3");
}

.qot4e3zhe {
  d: path("M8 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w9g5wtasy {
  d: path("M14 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="s0phu2bbs"><path class="cu26jmb_i"/><path class="j835zw5-z"/><path class="q7kpryb3v"/><path class="a8cyhwbdj"/><path class="qot4e3zhe"/><path class="w9g5wtasy"/></g>`,
		"fallback": "iconmind:habit-outline-bold",
	});
}

export default Component;

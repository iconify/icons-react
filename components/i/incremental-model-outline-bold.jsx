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
		"content": `<style>.jxd4hqxjs {
  d: path("m6 9 6 -6 6 6");
}

.oqavd2byi {
  d: path("M2 16a3 3 0 0 1 3 -3h14a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w6_tlja0w {
  d: path("M12 3v10");
}

.wneoubc6n {
  d: path("M7 21h10");
}
</style><g class="s0phu2bbs"><path class="oqavd2byi"/><path class="jxd4hqxjs"/><path class="w6_tlja0w"/><path class="wneoubc6n"/></g>`,
		"fallback": "iconmind:incremental-model-outline-bold",
	});
}

export default Component;

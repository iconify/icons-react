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
		"content": `<style>.cy34vrbps {
  d: path("M10 8.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.q-vmlqbkp {
  d: path("M12 10.5V13");
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wjfmfnbja {
  d: path("M12 11.5h2.5");
}
</style><g class="s0phu2bbs"><path class="qad3kqbgr"/><path class="cy34vrbps"/><path class="q-vmlqbkp"/><path class="wjfmfnbja"/></g>`,
		"fallback": "iconmind:geo-key-outline-bold",
	});
}

export default Component;
